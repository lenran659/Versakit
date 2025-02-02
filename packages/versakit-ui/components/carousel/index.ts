import { withInstall } from '../../utils/withinstall'
import Carousel from './src/index.vue'
import CarouselItem from './src/item.vue'

const VerCarousel = withInstall(Carousel)
const VerCarouselItem = withInstall(CarouselItem)

export { VerCarousel, VerCarouselItem }
