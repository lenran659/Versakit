import type { App, Component } from 'vue'
import VerButton from './components/button/index'
import VerText from './components/text/index'
import VerLink from './components/link/index'
import VerRow from './components/row/index'
import VerCol from './components/col/index'
import VerInput from './components/input/index'
import VerDialog from './components/dialog/index'
import VerDivider from './components/divider/index'
import VerAvatar from './components/avatar/index'
import VerBadge from './components/badge/index'
import VerCard from './components/card/index'
import VerTag from './components/tag/index'
import VerDrawer from './components/drawer/index'
import VerSwitch from './components/switch/index'
import VerRadio from './components/radio/index'
import VerMessage from './components/message/index'
import VerTextarea from './components/textarea/index'
import VerContainer from './components/container/index'
import VerHeader from './components/header/index'
import VerMain from './components/main/index'
import VerNotification from './components/notification/index'
import VerTab from './components/tab/index'
import VerIcon from './components/icon/index'
import VerBacktop from './components/backtop/index'
import VerResult from './components/result/index'
import VerEmpty from './components/empty/index'
import VerPanel from './components/panel/index'
import VerSegmented from './components/segmented/index'
import VerGradientText from './components/gradienttext/index'
import VerFooter from './components/footer/index'
import VerAside from './components/aside/index'
import VerProgress from './components/progress/index'
import VerTooltip from './components/tooltip/index'
import VerSlider from './components/slider/index'
import VerFlex from './components/flex/index'
import VerTable from './components/table/index'
import { VerCollapse, VerCollapseItem } from './components/collapse/index'
import { vRipple } from './directives/index'
import 'virtual:svg-icons-register'

const components: Component[] = [
  VerFlex,
  VerSlider,
  VerTooltip,
  VerProgress,
  VerAside,
  VerFooter,
  VerCollapse,
  VerCollapseItem,
  VerButton,
  VerRow,
  VerText,
  VerLink,
  VerCol,
  VerInput,
  VerDialog,
  VerAvatar,
  VerBadge,
  VerCard,
  VerPanel,
  VerTag,
  VerDivider,
  VerDrawer,
  VerSwitch,
  VerRadio,
  VerTextarea,
  VerContainer,
  VerHeader,
  VerMain,
  VerTab,
  VerIcon,
  VerBacktop,
  VerResult,
  VerEmpty,
  VerSegmented,
  VerGradientText,
  VerTable,
]
export {
  VerFlex,
  VerSlider,
  VerTooltip,
  VerProgress,
  VerAside,
  VerFooter,
  VerSegmented,
  VerCollapse,
  VerCollapseItem,
  VerButton,
  VerRow,
  VerText,
  VerLink,
  VerCol,
  VerInput,
  VerDialog,
  VerAvatar,
  VerBadge,
  VerCard,
  VerPanel,
  VerTag,
  VerDivider,
  VerDrawer,
  VerSwitch,
  VerRadio,
  VerMessage,
  VerTextarea,
  VerContainer,
  VerHeader,
  VerMain,
  VerNotification,
  VerTab,
  VerIcon,
  VerBacktop,
  VerResult,
  VerEmpty,
  VerGradientText,
  VerTable,
}

export default {
  install: (app: App) => {
    for (const c in components) {
      app.component(c, components[c])
    }

    app.directive('ripple', vRipple)
  },
}
