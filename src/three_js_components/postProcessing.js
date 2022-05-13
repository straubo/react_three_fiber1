import { EffectComposer, Pixelation, Outline, Noise } from "@react-three/postprocessing";
import { BlendFunction } from 'postprocessing'
import { Bloom, SSAO } from '@react-three/postprocessing'
import { BlurPass, Resizer, KernelSize } from 'postprocessing'

function PostProcessingWrapper() {
    return (
      <EffectComposer>
        {/* <Bloom
          intensity={.3} // The bloom intensity.
          blurPass={undefined} // A blur pass.
          width={Resizer.AUTO_SIZE} // render width
          height={Resizer.AUTO_SIZE} // render height
          kernelSize={KernelSize.LARGE} // blur kernel size
          luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
        /> */}
        <Noise premultiply blendFunction={BlendFunction.ADD} />
        <Pixelation
          granularity={2} // pixel granularity
        />
        
        {/* <Outline
        // Box2
          selection={[]} // selection of objects that will be outlined
          selectionLayer={10} // selection layer
          blendFunction={BlendFunction.SCREEN} // set this to BlendFunction.ALPHA for dark outlines
          patternTexture={null} // a pattern texture
          edgeStrength={2.5} // the edge strength
          pulseSpeed={0.0} // a pulse speed. A value of zero disables the pulse effect
          visibleEdgeColor={0xffffff} // the color of visible edges
          hiddenEdgeColor={0x22090a} // the color of hidden edges
          width={Resizer.AUTO_SIZE} // render width
          height={Resizer.AUTO_SIZE} // render height
          kernelSize={KernelSize.LARGE} // blur kernel size
          blur={false} // whether the outline should be blurred
          xRay={true} // indicates whether X-Ray outlines are enabled
        /> */}
      </EffectComposer>
    )
  }

export default PostProcessingWrapper;