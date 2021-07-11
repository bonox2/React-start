import React, { useContext } from 'react'
import { NumberContext } from './../contexts/numberContext';


export default function useNumber() {
    return useContext(NumberContext)
}