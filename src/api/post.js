// apiService.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:3500/';

const apiService = axios.create({
  baseURL: API_BASE_URL,
});

// You can have separate functions for different types of content
export const fitnessApi = {
  getNotesContent: ()=> apiService.get('/Notes'),
  getProteinContent: () => apiService.get('/proteinContent'),
  getCarboContent: () => apiService.get('/carboContent'),
  getFatContent: () => apiService.get('/fatContent'),
  getFiberContent: () => apiService.get('/fiberContent'),
  getVitaminContent: () => apiService.get('/vitaminContent'),
  getMineralContent: () => apiService.get('/mineralContent'),
  getbgwInitialPlanContent: ()=> apiService.get('/bgwInitialPlan'),
  getbgwPostPlanContent: ()=> apiService.get('/bgwPostPlan'),
  getblwInitialPlanContent : ()=> apiService.get('/blwInitialPlan'),
  getblwPostPlanContent: ()=> apiService.get('/blwPostPlan'),
  getigwInitialPlanContent: ()=> apiService.get('/igwInitialPlan'),
  getigwPostPlanContent: ()=> apiService.get('/igwPostPlan'),
  getilwInitialPlanContent: ()=> apiService.get('/ilwInitialPlan'),
  getilwPostPlanContent : ()=> apiService.get('/ilwPostPlan'),
  getagwInitialPlanContent: ()=> apiService.get('/agwInitialPlan'),
  getagwPostPlanContent: ()=> apiService.get('/agwPostPlan'),
  getalwInitialPlanContent : ()=> apiService.get('/alwInitialPlan'),
  getalwPostPlanContent : ()=> apiService.get('/alwPostPlan')
};
