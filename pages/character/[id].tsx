import React, { useEffect } from 'react'
import {useRouter} from 'next/router'
import Modal from 'react-modal';
import CharacterDetails from '../../components/CharacterDetails';
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -20%)',
    },
  }; 

 const CharacterDetail = () => {
     Modal.setAppElement('#__next');
     const router = useRouter()
     const {query:{id}} = router

     useEffect(() => {
        router.prefetch('/')
       
      }, [])
    
  return (
    <>
      <Modal
        isOpen={true} // The modal should always be shown on page load, it is the 'page'
        onRequestClose={() => router.push('/')}
        className= "modal"
        overlayClassName="modal-fondo"
        contentLabel="Character modal"
        style={customStyles}
      >
        <CharacterDetails id={id}/>
      </Modal>
    </>
  )
}
export default CharacterDetail;
