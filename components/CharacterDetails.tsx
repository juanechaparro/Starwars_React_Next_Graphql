import { gql, useQuery } from '@apollo/client'
import { Card, Tag } from 'antd'
import React from 'react'

 type CharacterArgs = {
    id: string | string[]
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
        <p>Peliculas:
        {data?.person.filmConnection.edges?.map(edge => {
          let color = edge.node?.title.length > 17 ? 'geekblue' : 'green';
          if (edge.node?.title === 'The Empire Strikes Back') {
            color = 'volcano';
          }
          //add planets
          return (
            <div key={edge.node?.id}>
               <p> {edge.node?.title}: </p>
              <Tag color={color} key={edge.node?.id}>
              {edge.node?.title} - {edge.node?.director}
            </Tag>
            </div>
           
            
          );
        })}
        </p>
    </Card>
  )
}
export default CharacterDetails