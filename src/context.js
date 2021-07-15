import {
  createContext
} from 'react';

export const MyUser = createContext({})
export const LoadStatus = createContext({
  status: true,
  change: (val) => {
    console.log(val)
  }
})