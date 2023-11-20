'use strict'

import fetch from 'node-fetch';
import Joi from 'joi';
import LoginReqDTOSchema from '/home/loadt/node/src/models/LoginReqDTOSchema.js';
import LoginErrorDTOSchema from '/home/loadt/node/src/models/LoginReqDTOSchema.js';


async function LoginRequest(username, password) {
    const url = 'https://capital-homologacao.conexos.cloud/login';
  
    const requestData = {
      username: username,
      password: password,
    };
  
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    };
  
    try {
      const response = await fetch(url, requestOptions);
  
      if (!response.ok) {
        throw new Error('Erro na requisição. Status: ' + response.status);
      }
  
      
      const responseData = await response.json();
      const validationResult = await LoginReqDTOSchema.validateAsync(responseData);
  
      if (validationResult.error) {
        throw new Error('Resposta inválida: ' + validationResult.error.message);
      }
  
      return responseData;
    } catch (error) {

      let errorData;
  
      try {
        errorData = await response.json();
      } catch (parseError) {
       
        errorData = await response.text();
      }
  
      const validationResult = await LoginErrorDTOSchema.validateAsync(errorData);
  
      if (validationResult.error) {
        throw new Error('Erro na requisição: ' + validationResult.error.message);
      }
  
      throw new Error('Erro na requisição: ' + errorData);
    }
  }
  
 export default LoginRequest 
