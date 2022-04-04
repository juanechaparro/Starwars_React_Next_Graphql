import { Tag } from 'antd';
import React from 'react'
type FilmsArgs = {
    edges: []|undefined
    }
export const FilmsTags = ({edges}) => {
  if(!edges || edges.length === 0 ) return null;
  return (
    <ul>
        {edges.map(edge => {
        let color = edge.node?.title.length > 18 ? 'geekblue' : 'green';
        if (edge.node?.title === 'The Empire Strikes Back') {
          color = 'volcano';
        }
        return (
          <li key={edge.node?.id}>
             {edge.node?.title}: 
             Director: 
             <Tag color={color} key={edge.node?.id}>
             {edge.node?.director}
            </Tag>
            Planetas: 
            {edge?.node?.planetConnection.edges.map(arr => {
            //add planets
            return (
                <Tag color={color} key={arr.node?.id}>
                 {arr.node?.name} 
                </Tag>
                 
            );
            })} 
          </li> 
        );
      })}
    </ul>
   
  )
}
