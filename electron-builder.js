module.exports = {
  appId: "me.antiphonl.messagesl",
  artifactName: "${productName}-v${version}-${os}-${arch}.${ext}",
  productName: "MessagesL",
  copyright: "Copyright 2025 Derek Hu",
  files: ["app/**/*", "resources/**/*"],
  directories: {
    buildResources: "resources",
    output: "dist",
  },
  linux: {
    target: ["AppImage", "snap", "deb", "pacman", "rpm", "freebsd", "zip"],
    executableName: "MessagesL",
    executableArgs: [
      "--ozone-platform-hint=auto",
      "--enable-features=WaylandWindowDecorations",
    ],
    category: "Internet",
    desktop: {
      Name: "MessagesL",
    },
  },
  win: {
    target: ["nsis", "portable"],
  },
  mac: {
    category: "public.app-category.social-networking",
    target: { target: "default", arch: "universal" },
  },
  portable: {
    artifactName: "${productName}-v${version}-${os}-${arch}.portable.${ext}",
  },
  nsis: {
    allowToChangeInstallationDirectory: true,
    oneClick: false,
  },
};
