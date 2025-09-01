import { makeInstaller } from '@astrola-element/utils'

import components from "./components.ts";

import '@astrola-element/theme/index.css'

const installer = makeInstaller(components)

export * from '@astrola-element/components'

export default installer