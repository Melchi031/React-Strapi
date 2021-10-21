import { useQuery } from '@apollo/client';
import { gql } from 'graphql-tag';
import { useHistory } from 'react-router-dom';

function ListeDesRecettes() {
  const SETTINGS_QUERY = gql`
    query {
      recettes {
        Titre
        id
      }
    }
  `;

  const { data } = useQuery(SETTINGS_QUERY);
  const history = useHistory();

  return (
    <div>
      <header className="App-header">
        <h1 className="pb-8 text-4xl font-bold underline">
          Liste des recettes
        </h1>
        {data && (
          <table className="divide-y divide-gray-100">
            <tr className="text-left">
              <th className="px-8">Numéro</th>
              <th>Titre</th>
            </tr>

            {data.recettes.map((recette, key) => (
              <tr
                key={key}
                className="even:bg-gray-700 hover:bg-gray-500 cursor-pointer"
                onClick={() => history.push('/recettes/' + recette.id)}
              >
                <td>{key}</td>
                <td className="text-left pr-8">{recette.Titre}</td>
              </tr>
            ))}
          </table>
        )}
      </header>
    </div>
  );
}
export default ListeDesRecettes;
