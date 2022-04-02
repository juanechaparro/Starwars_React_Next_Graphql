import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { Characters } from '../components/Characters';

const ALL_PEOPLE = gql`
query{
  allPeople { 
      people {
          name
          height
        	birthYear
        	eyeColor
          id
      }
  }
}`
const PeopleList = () => {
  const { loading, error, data } = useQuery(ALL_PEOPLE);
  if (loading) return <p>Loading...</p>;
  if(error) return <p>Error :(</p>;
  console.log(data);
  return (
    <div>
    Lista de Personajes 
    <Characters people={data?.allPeople.people} />
    </div>
  )
}
export default PeopleList
