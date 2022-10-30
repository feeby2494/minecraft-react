import { useStore } from "../hooks/useStore"
import { useEffect, useState } from "react"
import { useKeyboard } from "../hooks/useKeyboard"
import { dirtImg, grassImg, glassImg, woodImg, logImg } from '../images/images'

const images = {
    dirt: dirtImg,
    grass: grassImg,
    glass: glassImg,
    wood: woodImg,
    log: logImg
}

export const TextureSelector = () => {
    const [visable, setVisable] = useState(false)
    const [activeTexture, setTexture] = useStore((state) => [state.texture, state.setTexture])
    const {
        dirt,
        grass,
        glass,
        wood,
        log
    } = useKeyboard()

    useEffect(() => {
        const textures = {
			dirt,
			grass,
			glass,
			wood,
			log
		}
		const pressedTexture = Object.entries(textures).find(([k, v]) => v)
		if (pressedTexture) {
			setTexture(pressedTexture[0])
		}
    }, [setTexture, dirt, grass, glass, wood, log])

    useEffect(() => {
        const visablityTimeout = setTimeout(() => {
            setVisable(false)
        }, 500)
        setVisable(true)
        return () => {
            clearTimeout(visablityTimeout)
        }
    }, [activeTexture])

    return visable && (
        <div className="absolute centered texture-selector">
            {
                Object.entries(images).map(([k, src]) => {
                    return (
                        <img 
                            key={k}
                            src={src}
                            alt={k}
                            className={`${k === activeTexture? 'active' : ''}`}
                        />
                    )
                })
            }
        </div>
    )
}