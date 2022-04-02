import React from 'react'
import {useRouter} from 'next/router' 
 const CharacterDetail = () => {
     const {query:{name}} = useRouter();
  return (
    <div>  Personaje : {name}</div>
  )
}
export default CharacterDetail;
