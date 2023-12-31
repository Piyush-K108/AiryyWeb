/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/MovingElectricity.glb 
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/MovingElectricity.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Electricity_Controller" position={[0.078, -0.286, -1.957]} scale={2.47}>
          <group name="001_V_to_M_Shader_controller" position={[-0.032, 1.099, 0.467]} scale={0.243} />
          <group name="002_M_to_V_Controller" scale={0.384} />
          <mesh name="01_-_Starting_Mesh" geometry={nodes['01_-_Starting_Mesh'].geometry} material={materials.Material} scale={0.595}>
            <group name="02_-_Mesh_to_Volume" />
          </mesh>
          <mesh name="03_-_Volume_to_Mesh_-_HAS_MATERIAL" geometry={nodes['03_-_Volume_to_Mesh_-_HAS_MATERIAL'].geometry} material={materials['Electricity.000']} scale={0.54} />
        </group>
        <mesh name="path1" geometry={nodes.path1.geometry} material={materials['Material.003']} position={[0, 0.316, -2.031]} rotation={[Math.PI / 2, 0, 0]} scale={22.15} />
      </group>
    </group>
  )
}

useGLTF.preload('/MovingElectricity.glb')
