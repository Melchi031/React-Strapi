import logo from './logo.svg';
import './App.css';
import { useQuery } from '@apollo/client';
import { gql } from 'graphql-tag';

const SETTINGS_QUERY = gql`
  query {
    recettes {
      id
      Titre
    }
  }
`;

function App() {
  const { data } = useQuery(SETTINGS_QUERY);

  return (
    <div className="App font-body">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {data && (
          <p>
            {data.recettes[0].Titre ? (
              `Message : ${data.recettes[0].Titre}`
            ) : (
              <>
                Pas encore de message, visiter{' '}
                <a
                  className="App-link"
                  href="http://localhost:1337/admin"
                  target="_blank"
                  rel="noreferrer"
                >
                  strapi
                </a>{' '}
                pour le configurer
              </>
            )}
          </p>
        )}
      </header>
    </div>
  );
}

export default App;
