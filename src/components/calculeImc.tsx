"use client"
import { useRef, useState } from "react"

export default function CalculeImc() {

  const [imcCalculated, setImcCalculated] = useState<number | null>(null)

  const inputHeigthRef = useRef<HTMLInputElement>(null)
  const inputWeigthRef = useRef<HTMLInputElement>(null)

  function onCalculate() {
    const heigth = Number(inputHeigthRef.current?.value)
    const weigth = Number(inputWeigthRef.current?.value)

    const imc = weigth / ((heigth / 100) ** 2)

    setImcCalculated(imc)

    if (inputHeigthRef.current) inputHeigthRef.current.value = ''
    if (inputWeigthRef.current) inputWeigthRef.current.value = ''

  }

  return (
    <div>
      <label>
        <span>Altura (cm)</span>
        <input ref={inputHeigthRef} type="text" />
      </label>

      <label>
        <span>Peso</span>
        <input ref={inputWeigthRef} type="text" />
      </label>

      <button onClick={onCalculate}>Calcular</button>

      {imcCalculated && (
        <>
          <p>Seu IMC é: {imcCalculated.toFixed(2)}</p>
          <button onClick={() => setImcCalculated(null)}>Remover</button>
        </>
      )}
    </div>
  )
}
