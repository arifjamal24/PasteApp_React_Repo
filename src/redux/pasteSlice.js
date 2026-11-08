import { createSlice } from '@reduxjs/toolkit'

export const pasteSlice = createSlice({
  name: 'paste',
  initialState: {
    paste: localStorage.getItem("pastes")
            ? JSON.parse(localStorage.getItem("pastes"))
            : []
  },
  reducers: {
    addToPastes: (state, action) => {
      
    },
    updateToPastes: (state, action) => {
      
    },
    resetAllPastes: (state, action) => {
     
    },
    removeFromPastes: (state, action) => {

    },
  }
})

export const { addToPastes, updateToPastes, resetAllPastes, removeFromPastes } = pasteSlice.actions

export default pasteSlice.reducer