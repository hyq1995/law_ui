export default {
  sys: {
    networkRequestTimeout: '网络请求超时',
    systemHint: '系统提示',
    reloginTips: '登录状态已过期，您可以继续留在该页面，或者重新登录',
    reloginBtn: '重新登录',
    interfaceRequestFailed: '接口请求失败',
    logoutTips: '确定注销并退出系统吗？',
    warningTitle: '提示'
  },
  login: {
    title: 'EF-ADMIN 后台系统登录',
    logIn: '登录',
    username: '账号',
    password: '密码',
    rememberMe: '记住我',
    verificationCode: '验证码',
    LoggingIn: '登录中...',
    usernameChk: '用户名不能为空',
    passwordChk: '密码不能为空',
    verificationCodeChk: '验证码名不能为空'
  },
  sidebar: {
    title: 'EF-ADMIN 后台系统'
  },
  navbar: {
    dashboard: '首页',
    github: '项目地址',
    fullScreen: '全屏缩放',
    theme: '换肤',
    size: '布局大小',
    switchLang: '切换语言',
    projectDocs: '项目文档',
    layoutSettings: '布局设置',
    profile: '个人中心',
    logOut: '退出登录'
  },
  dashboard: { // 首页数据面板部分
    dayFlow: '日流量',
    dayIP: '日IP量',
    weekFlow: '周流量',
    weekIP: '周IP量'
  },
  crud: {
    new: '新增',
    edit: '编辑',
    delete: '删除',
    export: '导出',
    selectAll: '全选',
    search: '搜索',
    fuzzySearch: '模糊搜索',
    resetSearch: '重置搜索',
    advanceSearch: '高级搜索',
    confirm: '确定',
    cancel: '取消',
    submitSuccess: '提交成功',
    addSuccess: '新增成功',
    editSuccess: '编辑成功',
    delSuccess: '删除成功',
    exportData: '数据',
    deleteTips: '确定删除本条数据吗？',
    deleteWarn: '警告',
    multiDeleteTipsStart: '确认删除选中的',
    multiDeleteTipsEnd: '条数据?',
    selectAtLeastOne: '请至少选择一列',
    dialogTitleHint: '提示',
    thisOperate: '此操作将 \"',
    continueTxt: ', 是否继续？',
    save: '保存'
  },
  bool: {
    true: '是',
    false: '否'
  },
  common: {
    close: '关闭',
    clickUpload: '点击上传',
    success: '成功',
    failure: '失败',
    enable: '启用',
    disable: '禁用',
    dragFileUpload: '将文件拖到此处，或',
    startDate: '开始日期',
    endDate: '结束日期',
    startTime: '开始时间',
    endTime: '结束时间',
    testConnect: '测试连接',
    connectOK: '连接成功',
    connectFailed: '连接失败',
    execOK: '执行成功'
  },
  // 组件的属性国际化
  // 基础实体BaseEntity的属性字段
  be: {
    id: '主键',
    createTime: '创建时间',
    updateTime: '更新时间',
    creatorNum: '创建人',
    updaterNum: '更新人',
    remark: '备注',
    operate: '操作'
  },
  // 用户管理表
  user: {
    TITLE: '用户',
    username: '用户名',
    nickName: '昵称',
    usercode: '用户编码',
    sex: '性别',
    userAvatar: '用户头像',
    email: '邮箱',
    phone: '电话',
    enabled: '状态',
    password: '密码',
    lastPasswordResetTime: '最后修改密码时间',
    roles: '角色',
    job: '岗位',
    dept: '部门',
    selectDept: '选择部门',
    selectJob: '请先选择部门',
    selectRole: '选择角色',
    userSearchPlaceholder: '输入名称或者邮箱搜索',
    usernameEmptyChk: '请输入用户名',
    usernameLengthRangeChk: '长度在 2 到 20 个字符',
    nickNameEmptyChk: '请输入用户昵称',
    nickNameLengthRangeChk: '长度在 2 到 20 个字符',
    emailEmptyChk: '请输入邮箱地址',
    emailFormatChk: '请输入正确的邮箱地址',
    phoneEmptyChk: '请输入电话号码',
    phoneFormatChk: '请输入正确的11位手机号码',
    deptEmptyChk: '部门不能为空',
    jobEmptyChk: '岗位不能为空',
    rolesEmptyChk: '角色不能为空',
    userAddOKMsg: '新增成功，默认密码：123456'
  },
  sex: {
    male: '男',
    female: '女'
  },
  userAvatar: {
    realName: '真实姓名',
    path: '路径',
    size: '大小'
  },
  role: {
    TITLE: '角色',
    name: '角色名称',
    dataScope: '数据范围',
    dataPermission: '数据权限',
    level: '级别',
    remark: '备注',
    permission: '角色权限',
    users: 'users',
    menus: 'menus',
    depts: 'depts',
    roleList: '角色列表',
    menuAssignment: '菜单分配',
    searchPlaceholder: '输入名称或者描述搜索',
    dataScopePlaceholder: '请选择数据范围',
    selectPlaceholder: '请选择',
    nameRequired: '请输入名称',
    permissionRequired: '请输入权限',
    customChk: '自定义数据权限不能为空',
    menuTips: '选择指定角色分配菜单'
  },
  menu: {
    TITLE: '菜单',
    name: '菜单名称',
    sort: '排序',
    path: '路由地址',
    component: '组件路径',
    type: '菜单类型',
    permission: '权限标识',
    componentName: '组件名',
    icon: '图标',
    cache: '是否缓存',
    hidden: '是否可见',
    pid: '上级菜单',
    iFrame: '是否外链',
    roles: '关联角色',
    searchPlaceholder: '模糊搜索',
    iconPlaceholder: '点击选择图标',
    componentNamePlaceholder: '匹配组件内Name字段',
    componentPlaceholder: '组件路径',
    pidPlaceholder: '选择上级类目',
    deleteWarn: '确定删除吗,如果存在下级节点则一并删除，此操作不能撤销!',
    nameRequired: '请输入名称',
    pathRequired: '请输入地址'
  },
  menuType: {
    dir: '目录',
    menu: '菜单',
    button: '按钮',
    menuTitle: '菜单标题',
    btnName: '按钮名称'
  },
  dept: {
    TITLE: '部门',
    name: '名称',
    enabled: '状态',
    pid: '上级部门',
    roles: '角色',
    selectSuperTips: '选择上级类目',
    deleteTips: '确定删除吗,如果存在下级节点则一并删除，此操作不能撤销！',
    deptSearchPlaceholder: '输入部门名称搜索',
    nameRequired: '请输入部门名称',
    pidChk: '上级部门不能为空'
  },
  job: {
    TITLE: '岗位',
    name: '职位名称',
    sort: '排序',
    enabled: '状态',
    dept: '关联部门',
    jobSearchPlaceholder: '输入岗位名称搜索',
    nameRequired: '请输入名称',
    sortRequired: '请输入序号',
    deptRequired: '所属部门不能为空',
    deptSelectPlaceholder: '请选择部门'
  },
  dict: {
    TITLE: '字典',
    queryTips: '输入名称或者描述搜索',
    name: '名称',
    dictList: '字典列表',
    dictDetails: '字典详情',
    deleteTips: '此操作将删除字典与对应的字典详情，确定要删除吗？',
    nameRequired: '请输入名称'
  },
  dictDetail: {
    TITLE: '字典详情',
    queryTips: '输入字典标签查询',
    label: '字典标签',
    value: '字典值',
    sort: '排序',
    dict: '所属字典',
    clickViewDetail: '点击字典查看详情',
    deleteTips: '确定删除本条数据吗？',
    labelRequired: '请输入字典标签',
    sortRequired: '请输入序号'
  },
  employee: {
    TITLE: '员工',
    name: '姓名',
    idNumber: '身份证号',
    sex: '性别',
    code: '编码',
    avatar: '头像',
    email: '邮箱',
    phone: '电话',
    status: '状态',
    birthday: '生日',
    address: '地址',
    job: '职位',
    dept: '部门',
    simpleSearchPlaceholder: '请输入搜索内容',
    simpleSearchField: '请选择搜索字段',
    nameRequired: '姓名不能为空',
    nameLengthRangeChk: '姓名长度范围是2-128个字符',
    codeRequired: '编码不能为空',
    codeLengthRangeChk: '编码长度范围是1-32个字符',
    emailRequired: '邮件不能为空',
    emailFormatChk: '邮件格式不正确',
    phoneRequired: '电话不能为空',
    phoneLengthRangeChk: '电话长度范围是3-32个字符',
    statusSelectChk: '请选择员工状态',
    deptSelectChk: '请选择所在部门',
    jobSelectChk: '请选择员工职位'
  },
  online: {
    TITLE: '在线用户',
    userName: '用户名',
    nickName: '昵称',
    job: '岗位',
    browser: '浏览器',
    ip: '登录IP',
    address: '登录地点',
    loginTime: '登录时间',
    forceOut: '强退',
    deleteTips: '确定强制退出该用户吗？',
    deleteOk: '强退成功！',
    deleteTitle: '提示',
    deleteContentStart: '确认强退选中的',
    deleteContentEnd: '个用户?',
    allTableLikeSearch: '全表模糊搜索'
  },
  log: {
    TITLE: '日志',
    ERROR_TITLE: '异常日志',
    username: '用户名',
    description: '行为描述',
    method: '请求方法',
    params: '请求参数',
    logType: '日志类型',
    requestIp: '请求IP',
    address: 'IP来源',
    browser: '浏览器',
    time: '请求耗时',
    exceptionDetail: '异常详情',
    viewDetail: '查看详情',
    clearLog: '清空',
    deleteTitle: '提示',
    deleteTips: '确认清空所有操作日志吗?',
    deleteErrorTips: '确认清空所有异常日志吗?',
    simpleSearchPlaceholder: '输入你要搜索的内容'
  },
  server: {
    TITLE: '服务',
    name: '名称',
    address: 'IP地址',
    port: '访问端口',
    state: '状态',
    cpuRate: 'CPU使用率',
    cpuCore: 'CPU内核数',
    memTotal: '内存总数',
    memUsed: '内存使用量',
    diskTotal: '磁盘总量',
    diskUsed: '磁盘使用量',
    swapTotal: '交换区总量',
    swapUsed: '交换区使用量',
    sort: '排序',
    simpleSearchPlaceholder: '输入名称或者服务地址',
    nameRequired: '请输入名称',
    addressRequired: '请输入IP地址',
    portRequired: '请输入访问端口'
  },
  mserver: {
    TITLE: '服务器',
    name: '名称',
    ip: 'IP地址',
    port: '端口',
    account: '用户名',
    password: '密码',
    nameRequired: '请输入名称',
    ipRequired: '请输入IP地址',
    portRequired: '请输入端口',
    accountRequired: '请输入用户名',
    passwordRequired: '请输入密码',
    searchPlaceholder: '输入名称或IP搜索'
  },
  mapp: {
    TITLE: '应用',
    name: '应用名称',
    port: '端口',
    uploadPath: '上传目录',
    deployPath: '部署目录',
    backupPath: '备份目录',
    startScript: '启动脚本',
    deployScript: '部署脚本',
    copyBtn: '复制',
    searchPlaceholder: '输入名称搜索',
    nameRequired: '请输入应用名称',
    portRequired: '请输入端口',
    uploadPathRequired: '请输入上传目录',
    deployPathRequired: '请输入部署目录',
    backupPathRequired: '请输入备份目录',
    startScriptRequired: '请输入启动脚本',
    deployScriptRequired: '请输入部署脚本',
    namePlaceholder: '部署后的文件或者目录名称，用于备份',
    portPlaceholder: '例如: 8080',
    uploadPathPlaceholder: '例如: /opt/upload',
    deployPathPlaceholder: '例如: /opt/app',
    backupPathPlaceholder: '例如: /opt/backup'
  },
  deploy: {
    TITLE: '部署',
    appName: '应用名称',
    server: '服务器',
    deployTime: '部署时间',
    appNameRequired: '请选择应用名称',
    serverRequired: '请选择服务器',
    systemRecovery: '系统还原',
    statusQuery: '状态查询',
    start: '启动',
    stop: '停止',
    oneKeyDeploy: '一键部署',
    searchPlaceholder: '输入名称搜索'
  },
  deployHistory: {
    TITLE: '部署历史',
    appName: '应用名称',
    ip: '部署IP',
    deployDate: '部署时间',
    deployUser: '部署人员',
    deployId: '部署编号',
    searchPlaceholder: '输入搜索内容'
  },
  db: {
    TITLE: '数据库',
    name: '数据库名称',
    jdbcUrl: 'JDBC地址',
    userName: '数据库用户名',
    pwd: '数据库密码',
    execScript: '执行脚本',
    nameRequired: '请输入数据库名称',
    jdbcUrlRequired: '请输入JDBC地址',
    userNameRequired: '请输入数据库用户名',
    pwdRequired: '请输入数据库密码',
    execSqlTips: '上传后，系统会自动执行SQL脚本'
  },
  task: {
    TITLE: '定时任务',
    LOGTITLE: '执行日志',
    jobName: '任务名称',
    beanName: 'Bean名称',
    methodName: '方法名称',
    params: '方法参数',
    cronExpression: 'cron表达式',
    isPause: '已暂停',
    logBtn: '日志',
    searchPlaceholder: '输入任务名称搜索',
    execBtn: '执行',
    resumeBtn: '恢复',
    pauseBtn: '暂停',
    paused: '已暂停',
    running: '运行中',
    deleteTips: '确定停止并删除该任务吗？',
    jobNameRequired: '请输入任务名称',
    beanNameRequired: '请输入Bean名称',
    methodNameRequired: '请输入方法名称',
    cronExpressionRequired: '请输入cron表达式',
    logState: '日志状态',
    logConsumeTime: '执行耗时(毫秒)',
    logExceptionDetails: '异常详情',
    viewExceptionDetails: '查看详情'
  },
  codegen: {
    TITLE: '代码生成',
    tableName: '表名称',
    engine: '数据库引擎',
    coding: '编码集',
    searchPlaceholder: '输入表名查询',
    synchronizeBtn: '同步',
    previewBtn: '预览',
    downloadBtn: '下载',
    generateBtn: '生成',
    syncTips: '数据库中表字段变动时使用该功能',
    syncOK: '同步成功',
    generateOK: '生成成功'
  },
  genConfig: {
    tableName: '表名称',
    apiAlias: '接口名称',
    pack: '置于包下',
    moduleName: '模块名称',
    path: '前端路径',
    apiPath: '前端文件路径',
    author: '作者名称',
    prefix: '去表前缀',
    cover: '是否覆盖',
    tblFieldConfig: '表字段配置',
    fieldName: '字段名称',
    fieldType: '字段类型',
    fieldDescription: '字段描述',
    isRequired: '是否必填',
    inList: '在列表',
    inForm: '在表单',
    inputType: '输入类型',
    queryType: '查询方式',
    dateAnnotation: '日期注解',
    linkDict: '关联字典',
    formInput: '文本框',
    formTextarea: '文本域',
    formRadio: '单选框',
    formSelect: '下拉框',
    formDate: '日期框',
    autoCreateTime: '自动创建时间',
    autoUpdateTime: '自动更新时间',
    saveAndGenerate: '保存&生成',
    generateConfigure: '生成配置',
    selectPlaceholder: '请选择',
    apiAliasTips: '接口的名称，用于控制器与接口文档中',
    packTips: '项目包的名称，生成的代码放到哪个包里面',
    moduleNameTips: '模块的名称，请选择项目中已存在的模块',
    pathTips: '输入views文件夹下的目录，不存在即创建',
    authorTips: '类上面的作者名称',
    prefixTips: '默认不去除表前缀，可自定义',
    coverTips: '谨防误操作，请慎重选择',
    apiAliasRequired: '接口名称不能为空',
    packRequired: '包路径不能为空',
    moduleNameRequired: '模块名称不能为空',
    pathRequired: '前端路径不能为空',
    authorRequired: '作者名称不能为空',
    coverRequired: '是否覆盖不能为空',
    saveOK: '保存成功'
  },
  picture: {
    TITLE: '图片',
    filename: '文件名',
    url: '缩略图',
    size: '文件大小',
    height: '高度',
    width: '宽度',
    delete: '删除地址',
    username: '上传者',
    md5Code: 'MD5',
    uploadBtn: '上传',
    synchronizeBtn: '同步',
    syncOK: '同步成功',
    syncTips: '使用同步功能需要在 https://sm.ms/login 中注册账号，并且在 application.yml 文件中修改 Secret Token',
    searchPlaceholder: '输入文件名'
  },
  storage: {
    LOCAL_TITLE: '本地存储',
    QINIU_TITLE: '七牛云存储',
    realName: '真实文件名',
    name: '文件名',
    suffix: '后缀类型',
    path: '路径',
    type: '类型',
    size: '大小',
    operate: '操作人',
    uploadBtn: '上传',
    synchronizeBtn: '同步',
    configBtn: '配置',
    localSearchPlaceholder: '输入内容模糊搜索',
    qiniuSearchPlaceholder: '输入文件名称搜索',
    fileUpload: '文件上传',
    addFile: '添加文件',
    editFile: '编辑文件',
    clickUpload: '点击上传',
    localUploadTips: '可上传任意格式文件，且不超过100M',
    qiniuUploadTips: '请勿上传违法文件，且文件不超过15M',
    thumbnail: '缩略图',
    uploadOK: '上传成功',
    sizeLimit: '上传文件大小不能超过 100MB!',
    bucket: '空间名称',
    zone: '存储区域',
    host: '外链域名',
    bucketType: '空间类型',
    typePublic: '公开',
    typePrivate: '私有',
    qiniuConfigTitle: '七牛云配置',
    accessKeyRequired: '请输入accessKey',
    secretKeyRequired: '请输入secretKey',
    bucketRequired: '请输入空间名称',
    zoneRequired: '请输入存储区域',
    hostRequired: '请输入外链域名',
    bucketTypeRequired: '请输入空间类型',
    accessKeyPlaceholder: 'accessKey，在安全中心，秘钥管理中查看',
    secretKeyPlaceholder: 'secretKey，在安全中心，秘钥管理中查看',
    bucketPlaceholder: '存储空间名称作为唯一的 Bucket 识别符',
    zonePlaceholder: '请选择存储区域',
    hostPlaceholder: '外链域名，可自定义，需在七牛云绑定'
  },
  email: {
    EMAIL_CONFIG_TAB: '邮箱配置',
    EMAIL_SEND_TAB: '发送邮件',
    INSTRUCTIONS_TAB: '使用说明',
    host: 'SMTP地址',
    port: 'SMTP端口',
    user: '发件人名称',
    pass: '邮箱密码',
    fromUser: '发件人邮箱',
    hostRequired: '请输入SMTP地址',
    portRequired: '请输入SMTP端口',
    userRequired: '请输入发件人名称',
    passRequired: '请输入邮箱密码',
    fromUserRequired: '请输入发件人邮箱',
    emailFormatError: '请输入正确的邮箱地址',
    hostTips: '邮箱使用的发件服务器',
    portTips: '发件的端口号',
    userTips: '发件人的显示名称',
    passTips: '邮箱在邮件服务器上的认证密码',
    fromUserTips: '发件人的完整Email地址',
    emailTitle: '邮件主题',
    mailTo: '收件人',
    sendBtn: '发送邮件',
    emailSubjectRequired: '邮件主题不允许为空',
    mailToRequired: '收件人不允许为空',
    atLeastOneMailto: '请至少保留一位收件人',
    sendOK: '发送成功',
    helpServerConfigTitle: '邮件服务器配置',
    helpMoreTitle: '更多帮助',
    helpServerConfigTips: '\n' +
      ' # 邮件服务器的SMTP地址，可选，默认为smtp\n' +
      ' # 邮件服务器的SMTP端口，可选，默认465或者25\n' +
      ' # 发件人（必须正确，否则发送失败）\n' +
      ' # 用户名，默认为发件人邮箱前缀\n' +
      ' # 密码（注意，某些邮箱需要为SMTP服务单独设置密码，如QQ和163等等）\n' +
      ' # 是否开启ssl，默认开启',
    moreHelpViewDoc: '更多帮助请查看文档：',
    hutool: 'hutool工具包'
  },
  aliPay: {
    PAY_CONFIG_TAB: '参数配置',
    PAY_TEST_TAB: '支付测试',
    INSTRUCTIONS_TAB: '使用说明',
    appId: '应用ID',
    sysServiceProviderId: '商家账号',
    privateKey: '商户私钥',
    publicKey: '支付宝公钥',
    signType: '签名方式',
    gatewayUrl: '支付宝开放安全地址',
    returnUrl: '回调地址',
    notifyUrl: '异步通知',
    commodityName: '商品名称',
    commodityPrice: '商品价格',
    commodityDesc: '商品描述',
    toPayBtn: '去支付',
    commodityNameRequired: '商品名称不能为空',
    commodityPriceRequired: '商品价格不能为空',
    commodityDescRequired: '商品描述不能为空',
    priceRangeTips: '测试允许区间(0,5000]',
    helpWarningTitle: '注意',
    helpPaySettingsTitle: '支付设置',
    applyAddress: '\n测试所用参数都是沙箱环境，仅供测试使用，申请地址：',
    aliPayDevPlatform: '支付宝开发平台',
    payTestTips: '\n如需付款测试，请使用\n' +
      '账号：uuxesw9745@sandbox.com\n' +
      '密码与支付密码：111111',
    codeRemark: '\n// 支付提供两个接口，\n' +
      '// PC端与手机端，并且在前端使用代码识别',
    ifIsAndroid: '判断是否为Android手机',
    ifIsApple: '判断是否为苹果手机',
    appIdSpan: '应用APPID,收款账号既是APPID对应支付宝账号',
    sysServiceProviderIdSpan: '商家账号',
    privateKeySpan: '商户私钥，你的PKCS8格式RSA2私钥',
    publicKeySpan: '支付宝公钥',
    returnUrlSpan: '订单完成后返回的地址',
    notifyUrlSpan: '支付结果异步通知地址',
    appIdRequired: '请输入应用ID',
    sysServiceProviderIdRequired: '请输入商家账号',
    privateKeyRequired: '请输入商户私钥',
    publicKeyRequired: '请输入支付宝公钥',
    returnUrlRequired: '请输入回调地址',
    notifyUrlRequired: '请输入异步通知地址'
  },
  advanceSearch: {
    globalTypeLabel: '条件类型',
    nameLabel: '条件名称',
    searchTypeLabel: '查询方式',
    valLabel: '值',
    val2Label: '结束值',
    orderLabel: '参数顺序',
    logicalTypeLabel: '满足状况',
    bracketsGroupLabel: '所属分组',
    logicalTypeGroupLabel: '组关系',
    andLabel: '必须满足',
    orLabel: '可不满足',
    GroupItemDefault: '默认组',
    GroupItemOther: '其他组',
    typeSingle: '单个条件',
    typeMulti: '多个条件',
    typeGroup: '括号组',
    globalTypeTitle0: '只有一个条件时选择此项，例如：age=45',
    globalTypeTitle1: '有多个条件时选择此项，例如：age=45 and sex=男',
    globalTypeTitle2: '只有括号条件时选择此项，例如：name=张三 or (age=45 and sex=男)',
    nameTitle: '请选择查询条件',
    searchTypeTitle: '请选择查询方式',
    val1Title: '值，或区间查询的开始值',
    val2Title: '区间查询的结束值',
    orderTitle: '条件使用的先后顺序，默认0，在最前面',
    logicalTypeTitle: '请选择条件满足方式',
    bracketsGroupTitle: '请选择条件所属分组',
    logicalTypeGroupTitle: '请选择与其他组关系',
    searchTypeTitle0: '全模糊匹配',
    searchTypeTitle1: '精确相等',
    searchTypeTitle2: '区间范围',
    searchTypeTitle3: '不等于',
    searchTypeTitle4: '小于',
    searchTypeTitle5: '小于等于',
    searchTypeTitle6: '大于',
    searchTypeTitle7: '大于等于',
    searchTypeTitle8: '空值',
    searchTypeTitle9: '非空值',
    searchTypeTitle10: '左模糊查询',
    searchTypeTitle11: '右模糊查询',
    searchTypeTitle12: '包含于(IN)查询,例如:年龄值为{34,36,40,45}的数据',
    andTitle: '必须满足本条件，逻辑意义为与',
    orTitle: '当前条件可不满足，逻辑意义为或',
    defaultGroupTitle: '使用默认组',
    otherGroupTitle: '使用其他组',
    tbSearchPlaceholder: '输入关键字搜索',
    nameChk: '条件名称不允许为空！',
    valueEmptyChk: '查询参数值不允许为空!',
    endValueEmptyChk: '区间查询时结束值不允许为空!',
    valGtVal2Chk: '开始值不应比结束值大!',
    singleItemChk: '单条件查询不允许加入多个条件!',
    btnAddItem: '加入条件区',
    btnSearch: '搜索',
    btnReset: '清除所有查询条件',
    btnCancel: '取消'
  },
  editor: {
    baseOn: '富文本基于',
    mdBaseOn: 'Markdown基于',
    yamlBaseOn: 'Yaml编辑器基于',
    themePreview: '主题预览地址',
    imgUpUse: '图片上传使用',
    contentLi1: '富文本中图片上传使用的是 SM.MS 图床：',
    contentLi2: '更多帮助请查看官方文档：'
  },
  tenant: {
    // 属性的国际化信息
    TITLE: '系统租户',
    id: '主键',
    tenantName: '租户名称',
    tenantCode: '租户编码',
    dbUsername: 'DB用户名',
    dbPassword: 'DB密码',
    driverClassName: '驱动类名',
    jdbcUrl: 'JDBC链接',
    status: '租户状态',
    // 属性非空的国际化信息
    idRequired: '主键不能为空',
    tenantNameRequired: '租户名称不能为空',
    tenantCodeRequired: '租户编码不能为空',
    dbUsernameRequired: 'DB用户名不能为空',
    dbPasswordRequired: 'DB密码不能为空',
    driverClassNameRequired: '驱动类名不能为空',
    jdbcUrlRequired: 'JDBC链接不能为空',
    statusRequired: '租户状态不能为空'
  },
  documentation: {
    documentation: '文档',
    github: 'Github 地址'
  },
  permission: {
    addRole: '新增角色',
    editPermission: '编辑权限',
    roles: '你的权限',
    switchRoles: '切换权限',
    tips: '在某些情况下，不适合使用 v-permission。例如：Element-UI 的 el-tab 或 el-table-column 以及其它动态渲染 dom 的场景。你只能通过手动设置 v-if 来实现。',
    delete: '删除',
    confirm: '确定',
    cancel: '取消'
  },
  guide: {
    description: '引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。本 Demo 是基于',
    button: '打开引导'
  },
  components: {
    documentation: '文档',
    tinymceTips: '富文本是管理后台一个核心的功能，但同时又是一个有很多坑的地方。在选择富文本的过程中我也走了不少的弯路，市面上常见的富文本都基本用过了，最终权衡了一下选择了Tinymce。更详细的富文本比较和介绍见',
    dropzoneTips: '由于我司业务有特殊需求，而且要传七牛 所以没用第三方，选择了自己封装。代码非常的简单，具体代码你可以在这里看到 @/components/Dropzone',
    stickyTips: '当页面滚动到预设的位置会吸附在顶部',
    backToTopTips1: '页面滚动到指定位置会在右下角出现返回顶部按钮',
    backToTopTips2: '可自定义按钮的样式、show/hide、出现的高度、返回的位置 如需文字提示，可在外部使用Element的el-tooltip元素',
    imageUploadTips: '由于我在使用时它只有vue@1版本，而且和mockjs不兼容，所以自己改造了一下，如果大家要使用的话，优先还是使用官方版本。'
  },
  table: {
    dynamicTips1: '固定表头, 按照表头顺序排序',
    dynamicTips2: '不固定表头, 按照点击顺序排序',
    dragTips1: '默认顺序',
    dragTips2: '拖拽后顺序',
    title: '标题',
    importance: '重要性',
    type: '类型',
    remark: '点评',
    search: '搜索',
    add: '添加',
    export: '导出',
    reviewer: '审核人',
    id: '序号',
    date: '时间',
    author: '作者',
    readings: '阅读数',
    status: '状态',
    actions: '操作',
    edit: '编辑',
    publish: '发布',
    draft: '草稿',
    delete: '删除',
    cancel: '取 消',
    confirm: '确 定'
  },
  example: {
    warning: '创建和编辑页面是不能被 keep-alive 缓存的，因为keep-alive 的 include 目前不支持根据路由来缓存，所以目前都是基于 component name 来进行缓存的。如果你想类似的实现缓存效果，可以使用 localStorage 等浏览器缓存方案。或者不要使用 keep-alive 的 include，直接缓存所有页面。详情见'
  },
  errorLog: {
    tips: '请点击右上角bug小图标',
    description: '现在的管理后台基本都是spa的形式了，它增强了用户体验，但同时也会增加页面出问题的可能性，可能一个小小的疏忽就导致整个页面的死锁。好在 Vue 官网提供了一个方法来捕获处理异常，你可以在其中进行错误处理或者异常上报。',
    documentation: '文档介绍'
  },
  excel: {
    export: '导出',
    selectedExport: '导出已选择项',
    placeholder: '请输入文件名(默认excel-list)'
  },
  zip: {
    export: '导出',
    placeholder: '请输入文件名(默认file)'
  },
  pdf: {
    tips: '这里使用   window.print() 来实现下载pdf的功能'
  },
  theme: {
    change: '换肤',
    documentation: '换肤文档',
    tips: 'Tips: 它区别于 navbar 上的 theme-pick, 是两种不同的换肤方法，各自有不同的应用场景，具体请参考文档。'
  },
  tagsView: {
    refresh: '刷新',
    close: '关闭',
    closeOthers: '关闭其它',
    closeAll: '关闭所有'
  },
  settings: {
    title: '系统布局配置',
    theme: '主题色',
    tagsView: '开启 Tags-View',
    fixedHeader: '固定头部',
    sidebarLogo: '显示侧边栏Logo',
    menuUniqueOpened: '菜单单一打开'
  }
}
