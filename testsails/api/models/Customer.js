/**
 * Custumers.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  // attributes: {
  //   customerId:{
  //     type: 'float', 
  //     required: true,
  //     unique: true
  //   },

    customerName: {
      type: 'string',
     // required: true,
      
    },

    age: {
      type: 'float',
      //required: true
    },

    customerAddress:{
      type: 'string', 
     // required: true 
    }
  };

