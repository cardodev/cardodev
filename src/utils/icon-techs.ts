
export const logoTechs = {
  javascript: {
    name: "JavaScript",
    icon: "logos:javascript",
    url: "https://www.typescriptlang.org/",
  },
  typescript: {
    name: "TypeScript",
    icon: "logos:typescript-icon",
    url: "https://www.typescriptlang.org/",
  },
  php: {
    name: "PHP",
    icon: "logos:php",
    url: "https://www.typescriptlang.org/",
  },
  python: {
    name: "Python",
    icon: "logos:python",
    url: "https://www.typescriptlang.org/",
  },
  java: {
    name: "Java",
    icon: "logos:java",
    url: "https://www.typescriptlang.org/",
  },
  c_sharp: {
    name: "C#",
    icon: "logos:c-sharp",
    url: "https://www.typescriptlang.org/",
  },
  vue: {
    name: "Vue.js",
    icon: "logos:vue",
    url: "https://vuejs.org/",
  },
  angular: {
    name: "Angular",
    icon: "logos:angular-icon",
    url: "https://www.typescriptlang.org/",
  },
  laravel: {
    name: "Laravel",
    icon: "logos:laravel",
    url: "https://www.typescriptlang.org/",
  },
  nestjs: {
    name: "NestJS",
    icon: "logos:nestjs",
    url: "https://www.typescriptlang.org/",
  },
  fastapi: {
    name: "FastAPI",
    icon: "simple-icons:fastapi",
    url: "https://www.typescriptlang.org/",
  },
  aws: {
    name: "Amazon Web Services",
    icon: "logos:aws",
    url: "https://www.typescriptlang.org/",
  },
  azure: {
    name: "Microsoft Azure",
    icon: "logos:microsoft-azure",
    url: "https://www.typescriptlang.org/",
  },
};


export function getTechsWithIcons(techs: string[]) {
  let techWithIcons = []
  techWithIcons = techs.map(tech => {
    const techWithIcon = logoTechs[tech as never]
    if (techWithIcon) {
      return techWithIcon
    }
    return null
  }).filter(item => item !== null)

  return techWithIcons
}