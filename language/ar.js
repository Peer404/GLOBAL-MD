
const translations = {
    
    afktemx: 'ماميس، ماذا تريد أن تترك وصية أم أي شيء',
    afkdone: 'تم تعيين وضع AFK',
    afkdel: 'مرحبًا بك مرة أخرى',
    afktime: 'غائب منذ',
    with: 'السبب',
    afkmsg: 'سأخبر أولئك الذين يذكرونك',
    afktag: 'المستخدم في وضع AFK',
    name: 'الاسم',
    noMention: 'منشن مستخدم',
    userDb: 'المستخدم غير موجود في قاعدة بياناتي',
    example: 'مثال',

    //-- Stick reaction
    killmsg: 'قتل',
    kismsg: 'قبل',
    patmsg: 'مسح',
    slapmsg: 'صفع',

    next: 'التالي',
    hi: 'مرحبًا',
    gp: 'مجموعة',
    nobbot: 'هذا الأمر يمكن استخدامه فقط في الروبوت الرئيسي',
    botqr: '*استخدم هذا الرمز لتصبح بوت*\n\n1. انقر على النقاط الثلاث في الزاوية العلوية اليمنى.\n2. اضغط على الأجهزة المرتبطة\n3. حدد *الربط برقم الهاتف*\n\n*ملاحظة:* الرمز يعمل فقط لهذا الرقم',
    recon: 'اتصال مفقود...',
    sesClose: 'تم إغلاق الاتصال، يجب عليك إعادة الاتصال يدويًا عن طريق إرسال *المعرّف*',
    connet: 'تم الاتصال بنجاح',
    connID: '*تم الاتصال بنجاح!*\n\nسنرسل لك *المعرّف* الذي يجب استخدامه لإعادة الاتصال في غضون بضع ثوانٍ\n\n*ملاحظة:* قم بمغادرة مجموعة *DyLux ┃ ᴮᴼᵀ*\nاحتفظ برابط هذا حتى تتمكن من الانضمام مرة أخرى\nhttps://instabio.cc/fg98ff',
    connMsg: 'في المرة القادمة التي تقوم فيها بالاتصال، قم بإرسال الرسالة التالية لتسجيل الدخول بدون مسح رمز *QR* آخر',
    botlist: 'قائمة الروبوتات الفرعية النشطة',
    newcode: (usedPrefix) => `حسنًا! يمكنك الآن استخدام *${usedPrefix}botclone* لطلب رمز QR جديد`,
    nsbot: 'هذا الأمر مخصص لـ *الروبوتات الفرعية النشطة* فقط',
    msgcode: 'تم إرسال رمز جديد إلى رسائلك الخاصة',
    stopbot: 'تم قطع الاتصال مع الروبوت',

    total: 'الإجمالي',
    tx: 'المراسلة',
    txdone: 'تم إرسال الرسالة',
    cmdlist: '*قائمة الأوامر*\n\n▢ *معلومات:* إذا كانت مكتوبة بخط *عريض* فهي محجوبة',
    notext: 'يرجى تكرار الأمر بإضافة نص',
    textSe: 'افصل النص ب',
    reply: 'الرد على رسالة',
    replyImg: 'الرد على صورة',
    cmdSave: 'تم حفظ الأمر',

    oversizePrem: 'حجم الملف يتجاوز الحد المسموح للتنزيل',
    error: 'حدث خطأ، يرجى المحاولة مرة أخرى لاحقًا',
    size: 'الحجم',
    link: 'الرابط',
    dev: 'المطور',
    version: 'الإصدار',
    searchTo: (value, usedPrefix, command) => `للبحث في ${value}:\n\n📌 استخدم: *${usedPrefix + command} <نص>*\n\nلتنزيل من رابط:\n*${usedPrefix + command}* <رابط>`,
    search: (value) => `أدخل ما ترغب في البحث عنه في *${value}*`,
    lastUp: 'آخر تحديث',
    noLink: (value) => `يرجى إدخال رابط ${value}`,
    title: 'العنوان',
    noUsername: 'يرجى كتابة اسم مستخدم',
    username: 'اسم المستخدم',
    followers: 'متابعون',
    follows: 'متابعة',
    bio: 'السيرة الذاتية',
    posts: 'منشورات',
    aploud: 'تم التحميل',
    limitdl: 'حجم الملف يتجاوز الحد المسموح للتنزيل',
    limitdlTe: 'ترقية إلى النسخة المميزة لتمكين التنزيل للملفات حتى حجم',
    duration: 'المدة',
    views: 'المشاهدات',
    quality: 'الجودة',
    type: 'النوع',
    desc: 'الوصف',
    useCmd: 'استخدام الأمر',
    noNum: 'يرجى إدخال أرقام فقط',
    random: 'عشوائي',

    purse: 'محفظة',
    dmd: 'ألماس',
    money: 'عملات',
    bank: 'البنك',
    itemV: 'لعرض جميع العناصر *',
    isNan: 'يجب أن يكون العدد صحيحًا',
    voucher: 'قسيمة',
    buy: 'تم الشراء',
    buyCount: 'الكمية المشتراة',
    spent: 'المبلغ المنفق',
    buyNan: (value) => `ليس لديك ما يكفي من *${value}* للشراء`,
    noItem: (usedPrefix) => `هذا العنصر غير موجود:\n\n*${usedPrefix}shop* لعرض العناصر المتاحة`,
    noTime: 'تنسيق الوقت غير صحيح',
    second: 'ثانية(ثواني)',
    hour: 'ساعة(ساعات)',
    minute: 'دقيقة(دقائق)',
    day: 'يوم(أيام)',

    robCd: 'لا يمكنك القيام بـ *جريمة* في الوقت الحالي. يجب عليك الانتظار',
    crime: 'قمت بارتكاب جريمة بنجاح',
    crimeAl: 'لم تكن حذرًا بما فيه الكفاية أثناء السطو وقمت بتشغيل الإنذار. لقد نجحت في سرقة',
    robMul: 'أوه لا! فشلت في الجريمة وتم تغريمك بمبلغ',
    victin: 'ضحية',
    robDo: 'لقد قمت بسرقة',
    tag: 'العلامة',
    dailyCd: 'لقد استلمت بالفعل مكافأتك اليومية. عد في غضون',
    daily: 'مكافأة يومية',
    amount: 'المبلغ',
    dep: (value) => `لقد قمت بإيداع *${value}🪙* في البنك`,
    depNan: 'لا تملك أموالًا للإيداع',
    resBt: 'إعادة تعيين',
    lbTitle: 'جدول الترتيب',
    top: 'الأعلى',
    lvl: 'المستوى',
    of: 'من',
    you: 'أنت',
    rank: 'الترتيب',
    fxp: 'النقاط المطلوبة للصعود إلى المستوى التالي',
    lvlbfor: 'المستوى السابق',
    lvlup: 'المستوى الحالي',
    mineCd: 'سوف تستطيع العودة إلى المنجم بعد',
    mine: 'رائع! لقد حصلت على',
    restEcon: 'تم إعادة ضبط اقتصاد البوت',
    shop: 'المتجر',
    shopMsg: 'يمكنك الشراء باستخدام',
    prem: 'مميز',
    onTransfer: 'أنت تقوم بعملية تحويل',
    transItem: 'العناصر القابلة للتحويل',
    confirm: 'هل أنت متأكد من رغبتك في التحويل',
    to: 'إلى',
    payNan: 'الرصيد غير كافٍ للتحويل',
    payCd: 'انتهت المهلة',
    cancelPay: 'تم إلغاء التحويل',
    pay: 'تمت عملية التحويل بنجاح للمستخدم',
    payError: 'خطأ في عملية التحويل',
    wd: 'كم *Coin* تريد سحبها؟',
    wdYes: 'لقد سحبت',
    noWd: 'لا يمكنك سحب المزيد مما لديك في البنك',
    weeklyCd: 'هذا مكافأة أسبوعية 😉. عد في غضون',
    weekly: '*مكافأة أسبوعية*\n\nأوه! هل مرت بالفعل أسبوع؟ على أي حال، هنا لك',
    workCd: 'سوف تستطيع العودة للعمل في',

    nable: 'مُفعّل',
    disable: 'مُعطّل',
    toBot: 'لهذا البوت',
    toGp: 'لهذه المجموعة',
    gaytex: 'من يرغب في اغتصاب هذا المثلي الجنس؟',
    result: 'النتيجة',
    shipCd: 'سيتمكن من اختيار شريك آخر خلال',
    shipp: 'الزوج الموحد',
    toaud: 'يرجى الرد على الفيديو أو الملاحظة الصوتية التي ترغب في تحويلها إلى صيغة mp3 باستخدام الأمر',
    toav: 'يرجى الرد على الصوت الذي ترغب في تحويله إلى ملاحظة صوتية باستخدام',

    noGame: 'غير مشترك في لعبة حاليًا',
    resGame: 'تم إعادة تهيئة جلسة لعبة *TicTacToe*',
    gameOff: 'انتهت اللعبة',
    gaDone: 'إجابة صحيحة',
    win: 'فزت',
    mathOff: 'انتهت الفرص',
    chance: 'الفرص',
    answer: 'الإجابة',
    mathError: '*إجابة غير صحيحة*\n\nلا يزال هناك',
    gameMode: 'أوضاع اللعبة المتاحة',
    mathOn: 'لا تزال هناك أسئلة غير مجاوبة في هذه المجموعة',
    time: 'الوقت',
    timeOff: 'انتهى الوقت!\nالإجابة هي:',
    reward: 'المكافأة',
    pptCd: 'يجب عليك الانتظار للعب مرة أخرى',
    ppt: (usedPrefix, command) => `اختر حجر / ورقة / مقص\n\n📌 مثال: *${usedPrefix + command}* ورقة`,
    coinNan: 'ليس لديك ما يكفي من *Coins* للعب',
    stone: 'حجر',
    sciss: 'مقص',
    paper: 'ورقة',
    tie: 'تعادل',
    win: 'فزت',
    lost: 'خسرت',
    roulet: (usedPrefix) => `يمكنك القيام برهانات متعددة في لعبة الروليت.\n\nالاستخدام: *${usedPrefix}roulette* <المبلغ> <المجال>\n\nمعامل الرهان`,
    rouletCd: 'لقد قمت بالفعل برهان واحد. الرجاء الانتظار',
    moreInfo: 'لمزيد من المعلومات',
    betMin: 'يجب أن يكون مبلغ الرهان أكبر من',
    betMax: 'مبلغ الرهان يتجاوز الحد الأقصى للمبلغ',
    betNan: 'ليس لديك ما يكفي من *Coins* لإجراء هذا الرهان',
    in: 'في',
    bet: 'لقد قمت برهان بمبلغ',
    fell: 'توقفت الروليت عند',
    slotC: 'لقد اقتربت من النجاح، حاول مرة أخرى :)',

    delWarnUser: 'تم تخفيض عدد تحذيراتك من قبل المشرف. لديك الآن',
    warnNan: 'ليس لديك أي تحذيرات',
    delwarn: 'إزالة التحذير',
    warns: 'التحذيرات',
    warn: 'تحذير',
    warnRec: 'لقد تلقيت تحذيرًا من المشرف',
    numError: 'رقم غير صحيح',
    promote: 'تم ترقية المستخدم',
    demote: 'تم تخفيض المستخدم',
    gpInfo: 'معلومات المجموعة',
    members: 'الأعضاء',
    gpOwner: 'مالك المجموعة',
    admin: 'مشرف',
    gpConf: 'إعدادات المجموعة',
    gpConfMsg: 'إعدادات الرسائل',
    kick: 'تم طرد المستخدم',
    linkGp: 'رابط المجموعة',
    preNan: 'الرجاء إدخال بادئة رقم صحيحة',
    gpNanPre: 'المجموعة لا تحتوي على أعضاء بالبادئة المحددة',
    userPref: 'المستخدمون بالبادئة',
    profile: 'الملف الشخصي',
    number: 'الرقم',
    age: 'العمر',
    gender: 'الجنس',
    lang: 'اللغة',
    regOn: 'تم التسجيل في',
    xpUp: 'مستوى التجربة',
    upNan: 'باقي للارتقاء إلى المستوى',
    gpRulesNan: 'لا توجد قواعد محددة للمجموعة حاليًا',
    gpRules: 'قواعد المجموعة',
    rulesMsgOn: 'تم تعيين *قواعد المجموعة*',
    rulesMsg: 'الرجاء إدخال قواعد المجموعة',
    welMsgOn: 'تم تعيين رسالة الترحيب',
    leaMsgOn: 'تم تعيين رسالة الوداع',
    welMsg: 'الرجاء إدخال رسالة الترحيب\n\n@user (الإشارة)\n@group (اسم المجموعة)\n@desc (وصف المجموعة)',
    leaMsg: 'الرجاء إدخال رسالة الوداع\n\n@user (الإشارة)',
    gpSetting: 'إعدادات المجموعة\n\nفتح وإغلاق المجموعة',
    user: 'المستخدم',
    userWarn: 'المستخدم المحذر',
    wningUser: (war) => `إذا تلقيت *${war}* تحذيرات، سيتم طردك تلقائيًا من المجموعة`,
    warnMaxU: (war) => `تجاوز المستخدم الحد الأقصى للتحذيرات (${war}) وبالتالي سيتم طرده`,
    blockNan: 'لا توجد أرقام محظورة',
    bckList: 'قائمة المحظورين',
    donate: '*تبرع*\nيمكنك التبرع إذا كنت ترغب في المساعدة في الحفاظ على نشاط البوت',
    langList: 'يرجى اختيار اللغة التي ترغب في استخدامها\n\n≡ *اللغات المتاحة*',
    expire: 'تنتهي في',
    ping: 'سرعة الاستجابة',
    uptime: 'وقت التشغيل',
    gpNsfw: (usedPrefix) => `لا يسمح المجموعة بالمحتوى الجنسي الصريح\nاستخدم هذه المجموعة بدلاً من ذلك\n${bgp3}\n\nإذا كنت مشرفًا، فيمكنك تمكينه باستخدام\n*${usedPrefix}enable* nsfw`,
    nsfwAge: 'أنت قاصر! يرجى العودة عندما تكون أكبر من 18 عامًا',
    addPremUser: 'أصبحت الآن مستخدمًا مميزًا',
    banChat: 'تم تعطيل البوت في هذه المجموعة',
    unBanChat: 'البوت نشط في هذه المجموعة',
    banUser: 'لن يتمكن من استخدام أوامري بعد الآن',
    unBanUser: 'تم إلغاء الحظر',
    restartBot: 'جاري إعادة تشغيل البوت...\nيرجى الانتظار قليلاً',

    genderList: 'قائمة الأنواع',
    man: 'رجل',
    woman: 'امرأة',
    other: 'آخر',
    regIsOn: 'أنت مسجل بالفعل\n\nهل ترغب في إعادة التسجيل؟\n\n📌 استخدم هذا الأمر لحذف تسجيلك',
    nameMax: 'الاسم طويل جدًا',
    oldReg: 'واو الجد يريد أن يلعب مع البوت',
    numSn: 'رقم التسلسل',
    snVerify: 'تحقق من رقم التسلسل الخاص بك باستخدام الأمر',
    snError: 'رقم التسلسل غير صحيح',
    unReg: 'تم حذف التسجيل',
    stickError: 'فشل التحويل، يرجى محاولة إرسال *صورة/فيديو/GIF* أولاً ثم الرد بالأمر',
    tgStick: 'يرجى إدخال رابط لمجموعة ملصقات تيليجرام',
    replyStick: 'يرجى الرد على ملصق',
    ssWeb: 'يرجى إدخال عنوان URL لصفحة ويب',
    tradList: 'قائمة اللغات المدعومة',
    searchError: 'لم يتم العثور على نتائج',

    rownerH: 'يمكن استخدام هذا الأمر فقط بواسطة *صانع البوت*',
    ownerH: 'يمكن استخدام هذا الأمر فقط بواسطة *المالك والبوتات الفرعية*',
    modsH: 'هذه الوظيفة مخصصة فقط لـ *مشرفي البوت*',
    premH: 'يمكن استخدام هذا الأمر فقط بواسطة أعضاء *البريميوم*\n\nاكتب */premium* للمزيد من المعلومات',
    groupH: 'يمكن استخدام هذا الأمر فقط في المجموعات',
    privateH: 'يمكن استخدام هذا الأمر فقط في *محادثة خاصة مع البوت*',
    adminH: 'هذا الأمر مخصص فقط لـ *المشرفين* في المجموعة',
    botAdmin: 'يجب أن أكون *مسؤولًا* لاستخدام هذا الأمر!',
    unregH: 'سجل لاستخدام هذه الوظيفة بكتابة:\n\n/ reg'
}

export default translations
