import { useQuery } from '@apollo/client';
import { gql } from 'graphql-tag';

function ListeDesRecettes() {
  const SETTINGS_QUERY = gql`
    query {
      recettes {
        Titre
      }
    }
  `;

  const { data } = useQuery(SETTINGS_QUERY);

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
