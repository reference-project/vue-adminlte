import PurchaseType from '../../views/system/purchase/PurchaseType'
import ProfessionType from '../../views/system/profession/ProfessionType'
import NoticeManage from '../../views/system/notice/NoticeManage'
import NoticeTreeForm from '../../views/system/notice/NoticeTreeForm'
import RoomManage from '../../views/system/room/RoomManage'
import SettingManage from '../../views/system/setting/SettingManage'

import MenuList from '../../views/system/menu/MenuList'
import DictList from '../../views/system/dict/DictList'
import RoleList from '../../views/system/role/RoleList'

export default [
  { path: '/system/purchase-type', component: PurchaseType },
  { path: '/system/profession-type', component: ProfessionType },
  { path: '/system/notice', component: NoticeManage },
  { path: '/system/notice-tree-form', component: NoticeTreeForm },
  { path: '/system/room', component: RoomManage },
  { path: '/system/setting', component: SettingManage },
  { path: '/system/menu', component: MenuList },
  { path: '/system/dict', component: DictList },
  { path: '/system/role', component: RoleList }
]
