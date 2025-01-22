import type { Directive } from 'vue'

const DURATION = 1500 // 动画持续时间，ms

export const vIncrease: Directive = {
  mounted(el, binding) {
    const { value: maxCount } = binding
    el.$animation = animate((progress) => {
      el.innerText = Math.floor(maxCount * progress)
    }, DURATION)
  },
  unmounted(el) {
    if (el.$animation) {
      cancelAnimationFrame(el.$animation)
    }
  },
}

function animate(fn: (progress: number) => void, duration: number) {
  const start = new Date().getTime()
  let animationId: number | undefined

  const animation = () => {
    const now = new Date().getTime()
    const progress = Math.min((now - start) / duration, 1)
    fn(progress > 1 ? 1 : progress)
    if (now - start < duration) {
      animationId = requestAnimationFrame(animation)
    }
  }

  animationId = requestAnimationFrame(animation)
  return animationId
}
