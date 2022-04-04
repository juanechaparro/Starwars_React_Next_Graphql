import { gql, useQuery } from '@apollo/client'
import Modal from 'react-modal';
import React from 'react'
// import { CharacterModal } from '../components/CharacterModal';
import { Characters } from '../components/Characters';
import { useRouter } from 'next/router';
import CharacterDetails from '../components/CharacterDetails';
import { Col, Row } from 'antd';



const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
    },
  }; 

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
  Modal.setAppElement('#__next');
  const router = useRouter()
  const { loading, error, data } = useQuery(ALL_PEOPLE);
  if(error) return <p>Error :(</p>;
  console.log(data);
  return (  
    <div className='backgorund'> 
    <h1 className='Title1'> Personajes de StarWars </h1>
    <Row>
      <Col xs={1} sm={1} md={2} lg={2}>
          {" "}
      </Col>
      <Col xs={12} sm={14} md={18} lg={18}> 

        <Characters people={data?.allPeople.people} loading ={loading} />

     </Col>
     <Col xs={1} sm={2} md={4} lg={4}></Col>
  </Row>
    <Modal
     isOpen={!!router.query.id}
     onRequestClose={() => router.push('/')}
     className= "modal"
     overlayClassName="modal-fondo"
     contentLabel="Character modal"
     style={customStyles}
    >
    <CharacterDetails id = {router.query.id}/>
   
    </Modal>
    </div>
  )
}
export default PeopleList
