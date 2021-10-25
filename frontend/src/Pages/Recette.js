import { useQuery } from '@apollo/client';
import { gql } from 'graphql-tag';
import { useParams } from 'react-router-dom';
import Tag from '../Components/Tag.js';

function Recette() {
  const RECETTE_QUERY = gql`
    query ($id: ID!) {
      recette(id: $id) {
        id
        Titre
        Liste_Ingredients {
          quantite
          ingredient {
            nom
            unite_recette
          }
          forme
        }
        Liste_Etapes {
          Numero
          Instruction
        }
        tags {
          Name
          Color
        }
      }
    }
  `;

  const { id } = useParams();
  const { data: { recette } = {} } = useQuery(RECETTE_QUERY, {
    variables: { id },
  });

  return recette ? (
    <div className="App-header">
      <h1 className="text-4xl font-bold underline mb-2">{recette.Titre}</h1>
      <div className="space-x-4 mt-2 mb-4">
        {recette.tags.map((tag, key) => (
          <Tag key={key} color={tag.Color}>
            {tag.Name}
          </Tag>
        ))}
      </div>
      <div className="m-4">
        <h2 className="pb-6 text-3xl font-bold">Liste des ingrédients</h2>
        <ul className="text-left">
          {recette.Liste_Ingredients.map((ingredient, key) => (
            <li key={key}>
              {ingredient.quantite} {ingredient.ingredient.unite_recette}{' '}
              {ingredient.ingredient?.nom ?? (
                <span className="text-red-600">ingredient manquant</span>
              )}{' '}
              {ingredient.forme}
            </li>
          ))}
        </ul>
      </div>
      <div className="m-4">
        <h2 className="pb-6 text-3xl font-bold">Liste des étapes</h2>
        <ul>
          {recette.Liste_Etapes.map((etape, key) => (
            <li key={key}>
              {etape.Numero}{' '}
              {etape.Instruction ?? (
                <span className="text-red-600">étape manquante</span>
              )}{' '}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : null;
}
export default Recette;
