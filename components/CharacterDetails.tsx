import { gql, useQuery } from '@apollo/client'
import { Card, Tag } from 'antd'
import React from 'react'
import { FilmsTags } from './FilmsTags'

 type CharacterArgs = {
    id: string | string[] | undefined
    }
 


 const CharacterDetails = ({id}:CharacterArgs) => {
  const FIND_CHARACTER = gql
  `query { 
  person(personID: "${id}") {
    name
    height
    mass
    hairColor
    birthYear
    gender
    species{
      name
    }
    homeworld {
      name
    }
    species {
      name
    }
    filmConnection {
      edges {
        node {
          id
          title
          director
          planetConnection {
            edges {
              node {
                id
                name
              }
            }
          }
        }
      }
      
    }
  }
}`
const { loading, error, data } = useQuery(FIND_CHARACTER);
// const [getCharacter, result] = useLazyQuery(findCharacter, {finch:});
// const { loading, error, data } = result;
if(error) return <p>Error :(</p>;
  return (
    <Card title={data?.person.name} loading ={loading}>
        
        <p> Nombre :  <Tag color="blue">{data?.person.name}.</Tag></p>
        <p> Planeta de origen : <Tag color="blue">{data?.person.homeworld?.name}.</Tag></p> 
        <p> Edad : <Tag color="blue">{data?.person.birthYear}.</Tag></p>
        <p> Genero : <Tag color="blue">{data?.person.gender}.</Tag> </p>
        <p> Mass: <Tag color="blue">{data?.person.mass}. </Tag> </p>
        <p> Altura: <Tag color="blue"> {data?.person.height}. </Tag></p>
        <p> Especie:<Tag color="blue">{data?.person.species?.name}. </Tag>  </p>
        <div>Peliculas: <FilmsTags edges={ data?.person.filmConnection.edges}/></div>
    </Card>
  )
}
export default CharacterDetails