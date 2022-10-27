import { useBox } from "@react-three/cannon"

export const Cube = ({ position, texture }) => {
    const [ref] = useBox(() => ({
        type: 'Static',
        position
    }))

    return (
        <mesh ref={ref}>
            <boxBufferGeometry attach="geometry"/>
            <meshStandardMaterial attach="material" color="hotpink"/>
        </mesh>
    )
}