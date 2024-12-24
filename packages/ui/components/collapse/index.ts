import { withInstall } from '../../utils/withinstall'
import Collapse from './src/index.vue'
import CollapseItem from './src/item.vue'

const VerCollapse = withInstall(Collapse)
const VerCollapseItem = withInstall(CollapseItem)

export { VerCollapse, VerCollapseItem }
