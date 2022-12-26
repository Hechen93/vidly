import React, { Component } from 'react';

//What is the interface of this component?

//Input: Given entity (Movie) liked or not liked?

//Input: Liked?
//Output: Raise onClick event/ They will handle graphic output, do something in DB
//Dumb component

const Like = (props) => {
  let classes = 'fa fa-heart';
  if (!props.liked) classes += '-o';
  return <i className={classes} onClick={props.onClick} style={{ cursor: 'pointer' }} aria-hidden="true"></i>;
};

export default Like;
