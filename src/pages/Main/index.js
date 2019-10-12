import React, { Component } from 'react';
import { FaGithub, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Title, Form, SButton, List } from './styles';
import api from '../../services/api';
import Container from '../../components/Container';

// eslint-disable-next-line react/prefer-stateless-function
export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
  };

  componentDidMount() {
    const repositories = localStorage.getItem('repositorios');
    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;
    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositorios', JSON.stringify(repositories));
    }
  }

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true });
    const { newRepo, repositories } = this.state;
    const response = await api.get(`/repos/${newRepo}`);

    const data = {
      name: response.data.full_name,
    };

    this.setState({
      repositories: [...repositories, data],
      newRepo: '',
      loading: false,
    });
  };

  render() {
    const { newRepo, loading, repositories } = this.state;
    return (
      <Container>
        <Title>
          <FaGithub />
          Repositorios
        </Title>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="nome do repositorio"
            value={newRepo}
            onChange={this.handleInputChange}
          />
          <SButton loading={loading}>
            {loading ? (
              <FaSpinner color="#FFF" size={22} />
            ) : (
              <FaPlus color="#FFF" size={22} />
            )}
          </SButton>
        </Form>

        <List>
          {repositories.map(repository => (
            <li key={repository.name}>
              <span>{repository.name}</span>
              <Link to={`/repositorio/${encodeURIComponent(repository.name)}`}>
                Detalhes{' '}
              </Link>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}
