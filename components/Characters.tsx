import React from 'react'
import {Space, Table}from 'antd'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { fixid } from '../helpers/fixid'


export const Characters = ({people,loading}) => {

    const columns = [
        {
          title: 'Nombre',
          dataIndex: 'name',
          key: 'name',
          
          
        },
        {
          title: 'Fecha de nacimiento',
          dataIndex: 'birthYear',
          key: 'birthYear',
        },
        {
          title: 'Altura',
          dataIndex: 'height',
          key: 'height',
        },
        {
            title: 'Detalles del personaje',
            key: 'action',
            render: (text, char) => (
              <Space size="middle">
                {/* se realiza con el index of debido a que asi esta la query en graphql , dado que no esta el id real para el find */}
                <Link  href={`/?id=${fixid(people.indexOf(char)+1)}`} as={`/character/${fixid(people.indexOf(char)+1)}`}>
                <a style={{color: "blue"}} > Ver detalle del personaje...</a>
                </Link>
                
               
              </Space>
            ),
          },
    ]
   const router = useRouter();
   const handleClick = (id) => {
     router.push(`/character/${id}`)
  }
 
if(people === null) return null;
  return (
    <div>
        <Table 
        loading={loading}
        columns={columns}
        dataSource={people}
        onRow={(character) => {
            return {
             onDoubleClick: e => {handleClick(fixid(people.indexOf(character)+1))}, };
           }}
        rowKey={character => character.id}
        />
        </div>
  )
}

 