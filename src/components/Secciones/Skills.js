import {
    AWSIcon,
    AstroIcon,
    CssIcon,
    GitIcon,
    GraphQLIcon,
    MongoDBIcon,
    HtmlIcon,
    JavascriptIcon,
    NextjsIcon,
    NodeJsIcon,
    PythonIcon,
    ReactIcon,
    SQLIcon,
    TailwindIcon,
    TypescriptIcon,
    GitLabIcon,
    BootstrapIcon,
    FirebaseIcon,
    JavaIcon,
    PhpIcon,
    FigmaIcon,
    WordPressIcon,
    IllustratorIcon,
    XdIcon,
    GitHubIcon
} from '../../assets/icons'

const Stack = [
    {
        name: 'HTML',
        icon: <HtmlIcon height='70' width='70' />,
        className: '[&>svg]:hover:fill-[#E34F26]'
    },
    {
        name: 'CSS',
        icon: <CssIcon height='70' width='70' />,
        className: '[&>svg]:hover:fill-[#1572B6]'
    },
    {
        name: 'JavaScript',
        icon: <JavascriptIcon height='70' width='70' />,
        className: '[&>svg]:hover:fill-[#F7DF1E]'
    },
    {
        name: 'React',
        icon: <ReactIcon height='70' width='70' />,
        className: '[&>svg]:hover:fill-[#61DAFB]'
    },
    {
        name: 'NodeJs',
        icon: <NodeJsIcon height='70' width='70' />,
        className: '[&>svg]:hover:fill-[#8CC84B]'
    },
    {
        name: 'Python',
        icon: <PythonIcon height='70' width='70' />,
        className:
            '[&_#blue]:hover:fill-[url(#paint0_linear_87_8204)] [&_#yellow]:hover:fill-[url(#paint1_linear_87_8204)]'
    },
    {
        name: 'SQL',
        icon: <SQLIcon height='70' width='70' />,
        className: '[&>svg]:hover:fill-yellow-500'
    },
    {
        name: 'MongoDB',
        className: '[&>svg>circle]:hover:!fill-[#13AA52] [&>svg>path]:hover:!fill-[#FFFFFF]',
        icon: <MongoDBIcon height='70' width='70' />
    },
    {
        name: 'Firebase',
        icon: <FirebaseIcon height='70' width='70' />,
        className: '[&_#part-1]:hover:fill-[#ffa000] [&_#part-2]:hover:fill-[#f57f17] [&_#part-3]:hover:fill-[#ffca28] [&_#part-4]:hover:fill-[#ffa000]'
    },
    {
        name: 'Java',
        icon: <JavaIcon height='70' width='70' />,
        className: '[&_#part-1]:hover:fill-[#4e7896] [&_#part-2]:hover:fill-[#f58219]'
    },
    {
        name: 'PHP',
        icon: <PhpIcon height='70' width='70' />,
        className: '[&_#part-1]:hover:fill-[#777bb3]'
    },
    {
        name: 'Bootstrap',
        icon: <BootstrapIcon height='70' width='70' />,
        className: '[&>svg]:hover:fill-[#7952b3]'
    },
    {
        name: 'TailwindCSS',
        icon: <TailwindIcon height='70' width='70' />,
        className: '[&>svg]:hover:fill-[#06B6D4]'
    },
    {
        name: 'Figma',
        icon: <FigmaIcon height='70' width='70' />,
        className: '[&_#part-1]:hover:fill-[#0acf83] [&_#part-2]:hover:fill-[#a259ff] [&_#part-3]:hover:fill-[#f24e1e] [&_#part-4]:hover:fill-[#ff7262] [&_#part-5]:hover:fill-[#1abcfe]'
    },
    {
        name: 'WordPress',
        icon: <WordPressIcon height='70' width='70' />,
        className: '[&>svg]:hover:fill-[#00749a]',
    },
    {
        name: 'Adobe Illustrator',
        icon: <IllustratorIcon height='70' width='70' />,
        className: '[&_#part-1]:hover:fill-[#261300] [&_#part-2]:hover:fill-[#ff7c00]'
    },
    {
        name: 'Adobe XD',
        icon: <XdIcon height='70' width='70' />,
        className: '[&_#part-1]:hover:fill-[#470137] [&_#part-2]:hover:fill-[#FF61F6]'
    },
    {
        name: 'Git',
        icon: <GitIcon height='70' width='70' />,
        className: '[&>svg]:hover:fill-[#F05032]'
    },
    {
        name: 'GitLab',
        icon: <GitLabIcon height='70' width='70' />,
        className: '[&_#orange-dark]:hover:fill-[#e24329] [&_#orange]:hover:fill-[#fc6d26] [&_#yellow]:hover:fill-[#fca326]'
    },
    {
        name: 'GitHub',
        icon: <GitHubIcon height='70' width='70' />,
        className: '[&>svg]:hover:fill-[#8D036F]',
    }
]

export default function Skills() {

    return (
        <section id='Skills' className="lg:p-24 sm: p-0">
            <div className='p-10 rounded-3xl'>
                <div className="portfolio--container">
                    <h2 className="skills--section--heading text-[#C96AA9]">{/* #8D036F */}Mis habilidades</h2>
                    <p className="section--title">"La mente que se abre a una nueva idea jamás volverá a su tamaño original"  Albert Einstein</p>
                </div>
                <ul className='my-10 flex grid-cols-5 flex-wrap justify-center gap-4 sm:grid'>
                    {Stack.map(({ name, icon, className }) => (
                        <li
                            key={name}
                            className={`flex flex-col items-center gap-2 transition-all duration-100 ease-out hover:scale-125 ${className} [&>svg]:fill-[#ffffff]`}
                        >
                            {icon}
                            <span className='text-l text-primary-300'>{name /* #DBA3D6 */}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}