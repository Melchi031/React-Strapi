import { useQuery } from '@apollo/client';
import { gql } from 'graphql-tag';
import { useHistory } from 'react-router-dom';
import FilterBar from '../Components/FilterBar.js';
import Tag from '../Components/Tag.js';
import { useState } from 'react';
import Fuse from 'fuse.js';
import { fuseOptions, unpackSearch } from '../Utils/fuseUtil';
import diacritics from 'diacritics';

function ListeDesRecettes() {
  const SETTINGS_QUERY = gql`
    query {
      recettes {
        Titre
        id
        tags {
          Name
          Color
        }
      }
    }
  `;

  const { data } = useQuery(SETTINGS_QUERY);
  const history = useHistory();
  const [search, setSearch] = useState('');
  let filteredData = [];

  if (data) {
    const fuse = new Fuse(data.recettes, fuseOptions);
    if (search == '') {
      filteredData = data.recettes; //.recettes ?? [];
    } else {
      const diaSearch = diacritics.remove(search);
      filteredData = unpackSearch(fuse.search(diaSearch));
      //filteredData = unpackSearch(fuse.search(search));
    }
  }

  return (
    <div>
      <header className="App-header">
        <FilterBar
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeHolder="Chercher une recette..."
        />
        <h1 className="pb-8 text-4xl font-bold underline">
          Liste des recettes
        </h1>
        {filteredData && (
          <table className="divide-y divide-gray-100">
            <tr className="text-left">
              <th className="px-8">Numéro</th>
              <th>Titre</th>
              <th>Tags</th>
            </tr>
            {filteredData.map((recette, key) => (
              <tr
                key={key}
                className="even:bg-gray-700 hover:bg-gray-500 cursor-pointer"
                onClick={() => history.push('/recettes/' + recette.id)}
              >
                <td>{key}</td>
                <td className="text-left pr-8">{recette.Titre}</td>
                <td>
                  <div className="flex items-center space-x-2">
                    {recette.tags.map((tag, key) => (
                      <Tag key={key} color={tag.Color}>
                        {tag.Name}
                      </Tag>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </table>
        )}
      </header>
    </div>
  );
}
export default ListeDesRecettes;
