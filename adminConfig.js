Artifi.Config = {
    serverFrontUrl: "//testdesigner.artifi.net:8080/", // this is for server designer url
    serverAdminUrl: "//testadmin.artifi.net:8080/", // this is for server admin url
    serverImageUrl: "//testimages.artifi.net:8080/",
    adminBaseUrl: '',// window.location.protocol + "//localhost:3505/",
    frontBaseUrl: '',// window.location.protocol + "//localhost:1534/",
    localAdminUrl: "//localhost:3505/",
    localDesignerUrl: "//localhost:1534/",
    fontDataUrl: "assets/externalData/data/fontList.json", /*This is unwanted key*/
    cropSrcUrl: "ProductView/SaveCropedImage",
    baseUrl: "",
    adminImageUrl: "//testimages.artifi.net:8080/", //for user images of Admin
    designerImageUrl: "//testdesignerimages.artifi.net:8080/", // for user photo of front
    dragAndDrop: false,
    currentDpiValue: 72,
    isDebugMode: true,
    antiAlise: true, /*FLAG FOR ANTI ALISE MODE ON / OFF (FOR SMOOTHENING IMAGE WHEN SCALED DOWN)*/
    showPreview: false,
    getRuleData: "Rule/GetRuleById",
    specificFontCssUrl: "/ProductView/GetSpecificFontCss",
    noneTemplateImageName: "templateImage.png",
    IsRuleExists: "ProductView/IsRuleExists", /*Path for checking Duplicate Rule */
    getProductImageUrl: "Template/SaveTemplateImage", /*Product image url save*/
    imageEffects: 'Designer/Services/ApplyImageEffect',/* Image Effects service URL */

    init: function () {
        if (this.serverFrontUrl.endsWith("designerurl__")) {
            this.frontBaseUrl = window.location.protocol + this.localDesignerUrl;
        }
        else {
            this.frontBaseUrl = window.location.protocol + this.serverFrontUrl;
        }
        if (this.serverAdminUrl.endsWith("adminurl__")) {
            this.adminBaseUrl = window.location.protocol + this.localAdminUrl;
        }
        else {
            this.adminBaseUrl = window.location.protocol + this.serverAdminUrl;
        }
        this.productImagePath = this.adminImageUrl + "UserImages/" + companyPhysicalFolderName + "/" + divisionPhysicalFolderName + "/Products/Standard/";
        this.productSvgPath = this.adminImageUrl + "UserImages/" + companyPhysicalFolderName + "/" + divisionPhysicalFolderName + "/Mask/";
        this.productOverlayPath = this.adminImageUrl + "UserImages/" + companyPhysicalFolderName + "/" + divisionPhysicalFolderName + "/Overlay/Standard/";
        this.clipartImagePath = this.adminImageUrl + "UserImages/" + companyPhysicalFolderName + "/" + divisionPhysicalFolderName + "/Cliparts/Standard/";
        this.clipartThumbPath = this.adminImageUrl + "UserImages/" + companyPhysicalFolderName + "/" + divisionPhysicalFolderName + "/Cliparts/Thumbnail/";
        this.placeHolderImageUrl = this.adminImageUrl + "Content/Images/artifi-header-logo.png";
        this.audioPlaceHolderImageUrl = this.adminImageUrl + "Content/Images/audio-placeholder.png";
        this.fontBaseUrl = this.adminBaseUrl + "Content/externalData/fonts/";
        this.colorThumbPath = this.adminImageUrl + "UserImages/" + companyPhysicalFolderName + "/" + divisionPhysicalFolderName + "/Colors/Thumbnail/";
        this.templateImageUrl = this.adminImageUrl + "UserImages/" + companyPhysicalFolderName + "/" + divisionPhysicalFolderName + "/Template/ProductImage/";
        this.templateNoneImageUrl = this.adminImageUrl + "Content/Images/";
        this.fontFileUrl = this.adminImageUrl + "UserImages/" + companyPhysicalFolderName + "/" + divisionPhysicalFolderName + "/Fonts/";
        this.getProductImageUrl = this.adminBaseUrl + this.getProductImageUrl;
        this.cropSrcUrl = this.adminBaseUrl + this.cropSrcUrl;
        this.dummyAudioUrl = this.adminImageUrl + "Content/Audio/Artifi.mp3";

        this.clipartPreviewPath = this.adminImageUrl + "UserImages/" + companyPhysicalFolderName + "/" + divisionPhysicalFolderName + "/Cliparts/Standard/";
        this.clipartPrintPath = this.adminImageUrl + "UserImages/" + companyPhysicalFolderName + "/" + divisionPhysicalFolderName + "/Cliparts/Print/";
        this.clipartDisplayPath = this.adminImageUrl + "UserImages/" + companyPhysicalFolderName + "/" + divisionPhysicalFolderName + "/Cliparts/Display/";

        /*Audio Library Path*/
        this.audioLibAudioPath = this.adminImageUrl + "UserImages/" + companyPhysicalFolderName + "/" + divisionPhysicalFolderName + "/Audios/";
        this.audioLibThumbImgPath = this.adminImageUrl + "UserImages/" + companyPhysicalFolderName + "/" + divisionPhysicalFolderName + "/Audios/Thumbnail/";
        this.audioLibImgPreviewPath = this.adminImageUrl + "UserImages/" + companyPhysicalFolderName + "/" + divisionPhysicalFolderName + "/Audios/Standard/";
        this.defaultAudioImage = this.adminImageUrl + "Content/Images/MusicIcon.png";
        this.applicationImagePath = this.adminImageUrl + "Content/Images";
        this.rotateImageUrl = this.adminImageUrl + "/Content/Images/Rotate_Icon.png";
        return this;
    }
}.init();