export default {
  route: {
    dashboard: 'Trang chủ',
    documentation: 'Tài liệu',
    shop: 'Cửa hàng',
    guide: 'Hướng dẫn',
    permission: 'Phân quyền',
    pagePermission: 'Trang phân quyền',
    rolePermission: 'Nhóm quyền',
    directivePermission: 'Chỉ thị quyền',
    icons: 'Icons',
    components: 'Components',
    tinymce: 'Tinymce',
    markdown: 'Markdown',
    jsonEditor: 'JSON Editor',
    dndList: 'Dnd List',
    splitPane: 'SplitPane',
    avatarUpload: 'Avatar Upload',
    dropzone: 'Dropzone',
    sticky: 'Sticky',
    countTo: 'Count To',
    componentMixin: 'Mixin',
    backToTop: 'Back To Top',
    dragDialog: 'Drag Dialog',
    dragSelect: 'Drag Select',
    dragKanban: 'Drag Kanban',
    charts: 'Charts',
    keyboardChart: 'Keyboard Chart',
    lineChart: 'Line Chart',
    mixChart: 'Mix Chart',
    example: 'Ví dụ',
    nested: 'Nested Routes',
    menu1: 'Menu 1',
    'menu1-1': 'Menu 1-1',
    'menu1-2': 'Menu 1-2',
    'menu1-2-1': 'Menu 1-2-1',
    'menu1-2-2': 'Menu 1-2-2',
    'menu1-3': 'Menu 1-3',
    menu2: 'Menu 2',
    Table: 'Table',
    dynamicTable: 'Dynamic Table',
    dragTable: 'Drag Table',
    inlineEditTable: 'Inline Edit',
    complexTable: 'Complex Table',
    tab: 'Tab',
    form: 'Form',
    createArticle: 'Create Article',
    editArticle: 'Edit Article',
    articleList: 'Article List',
    errorPages: 'Error Pages',
    page401: '401',
    page404: '404',
    errorLog: 'Error Log',
    excel: 'Excel',
    exportExcel: 'Export Excel',
    selectExcel: 'Export Selected',
    mergeHeader: 'Merge Header',
    uploadExcel: 'Upload Excel',
    zip: 'Zip',
    pdf: 'PDF',
    exportZip: 'Export Zip',
    theme: 'Theme',
    clipboardDemo: 'Clipboard',
    i18n: 'I18n',
    externalLink: 'External Link',
    profile: 'Hồ sơ'
  },
  navbar: {
    dashboard: 'Trang chủ',
    github: 'Github',
    logOut: 'Đăng xuất',
    profile: 'Hồ sơ',
    theme: 'Theme',
    size: 'Global Size'
  },
  login: {
    title: 'Đăng nhập vào hệ thống',
    logIn: 'Đăng nhập',
    username: 'Tên đăng nhập',
    password: 'Mật khẩu',
    any: 'bất kỳ',
    thirdparty: 'Hoặc kết lối với',
    thirdpartyTips: 'Can not be simulated on local, so please combine you own business simulation! ! !'
  },
  documentation: {
    documentation: 'Tài liệu',
    github: 'Github Repository'
  },
  permission: {
    addRole: 'Thêm nhóm quyền',
    editPermission: 'Chỉnh sửa',
    roles: 'Nhóm quyền của bạn',
    switchRoles: 'Chuyển nhóm quyền',
    tips: 'Trong một số trường hợp, sử dụng v-allow sẽ không có hiệu lực. Ví dụ: el-tab Element-UI hoặc el-table-cột và các cảnh khác tự động hiển thị dom. Bạn chỉ có thể làm điều này với v-if.',
    delete: 'Xóa',
    confirm: 'Xác nhận',
    cancel: 'Thoát'
  },
  guide: {
    description: 'Trang hướng dẫn hữu ích cho một số người lần đầu tiên tham gia dự án. Bạn có thể giới thiệu ngắn gọn các tính năng của dự án. Bản demo dựa trên ',
    button: 'Hiện hướng dẫn'
  },
  components: {
    documentation: 'Tài liệu',
    tinymceTips: 'Văn bản phong phú là một tính năng cốt lõi của phụ trợ quản lý, nhưng đồng thời nó là một nơi có rất nhiều hố. Trong quá trình lựa chọn các văn bản phong phú, tôi cũng mất rất nhiều đường vòng. Các văn bản phong phú phổ biến trên thị trường về cơ bản đã được sử dụng, và cuối cùng tôi đã chọn Tinymce. Xem chi tiết so sánh văn bản và giới thiệu.',
    dropzoneTips: 'Bởi vì doanh nghiệp của tôi có nhu cầu đặc biệt và phải tải hình ảnh lên qiniu, vì vậy thay vì bên thứ ba, tôi đã chọn tự mình đóng gói nó. Nó rất đơn giản, bạn có thể xem mã chi tiết trong @/component/Dropzone.',
    stickyTips: 'Khi trang được cuộn đến vị trí đặt trước sẽ bị dính ở trên cùng.',
    backToTopTips1: 'Khi trang được cuộn đến vị trí đã chỉ định, nút Quay lại trên cùng xuất hiện ở góc dưới bên phải',
    backToTopTips2: 'Bạn có thể tùy chỉnh kiểu của nút, hiển thị / ẩn, chiều cao của ngoại hình, chiều cao của sự trở lại. Nếu bạn cần một dấu nhắc văn bản, bạn có thể sử dụng các phần tử el-tooltip bên ngoài',
    imageUploadTips: 'Vì hiện tại tôi chỉ sử dụng phiên bản vue 1 và hiện tại nó không tương thích với mockjs, tôi đã tự sửa đổi nó và nếu bạn định sử dụng nó, tốt hơn là sử dụng phiên bản chính thức.'
  },
  table: {
    dynamicTips1: 'Fixed header,được sắp xếp theo thứ tự tiêu đề',
    dynamicTips2: 'Not fixed header, sắp xếp theo click order',
    dragTips1: 'Thứ tự mặc định',
    dragTips2: 'Thứ tự sau khi kéo',
    title: 'Tiêu đề',
    importance: 'Quan trọng',
    type: 'Loại',
    remark: 'Remark',
    search: 'Tìm kiếm',
    add: 'Thêm',
    export: 'Xuất',
    reviewer: 'Xem lại',
    id: 'ID',
    date: 'Ngày',
    author: 'Tác giả',
    readings: 'Bài đọc',
    status: 'Trạng thái',
    actions: 'Hành động',
    edit: 'Chỉnh sửa',
    publish: 'Xuất bản',
    draft: 'Nháp',
    delete: 'Xóa',
    cancel: 'Thoát',
    confirm: 'Xác nhận'
  },
  example: {
    warning: 'Creating and editing pages cannot be cached by keep-alive because keep-alive include does not currently support caching based on routes, so it is currently cached based on component name. If you want to achieve a similar caching effect, you can use a browser caching scheme such as localStorage. Or do not use keep-alive include to cache all pages directly. See details'
  },
  errorLog: {
    tips: 'Please click the bug icon in the upper right corner',
    description: 'Now the management system are basically the form of the spa, it enhances the user experience, but it also increases the possibility of page problems, a small negligence may lead to the entire page deadlock. Fortunately Vue provides a way to catch handling exceptions, where you can handle errors or report exceptions.',
    documentation: 'Tài liệu giới thiệu'
  },
  excel: {
    export: 'Xuất',
    selectedExport: 'Xuất các mục đã chọn',
    placeholder: 'Vui lòng nhập tên tệp '
  },
  zip: {
    export: 'Xuất',
    placeholder: 'Vui lòng nhập tên tệp'
  },
  pdf: {
    tips: 'Ở đây chúng tôi sử dụng window.print () để thực hiện tính năng tải xuống PDF.'
  },
  theme: {
    change: 'Thay đổi theme',
    documentation: 'Tài liệu Theme',
    tips: 'Tip: Nó khác với chọn chủ đề trên thanh điều hướng là hai phương pháp tạo lớp da khác nhau, mỗi phương pháp có các kịch bản ứng dụng khác nhau. Tham khảo tài liệu để biết chi tiết.'
  },
  tagsView: {
    refresh: 'Làm mới',
    close: 'Đóng',
    closeOthers: 'Đóng các cái khác',
    closeAll: 'Đóng tất cả'
  },
  settings: {
    title: 'Cài đặt Page style',
    theme: 'Màu theme',
    tagsView: 'Mở Tags-View',
    fixedHeader: 'Fixed Header',
    sidebarLogo: 'Sidebar Logo'
  }
}
