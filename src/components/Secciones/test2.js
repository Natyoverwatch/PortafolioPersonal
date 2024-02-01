
import { GitHubIcon, WebIcon, GitLabIcon } from '../../assets/icons'
import { Glow } from '@codaworks/react-glow'

export function CardProject({
    title,
    img,
    labels,
    url,
    repoHub,
    repoLab,
    description = '',
    color,
    styles
}) {
    return (
        <>
            <Glow color={color} className='flex justify-center'>
                <article
                    className={`
                        flex h-full flex-col justify-between gap-4 rounded-md border-[3px] border-primary-200/50 bg-primary-500 p-6 ${color} 
                            ${styles} w-full  max-w-xs
                            flex-col items-center gap-4 rounded-md border-2 p-6 text-white glow:border-glow lg:min-w-full
                        `}
                >
                    <h3 className='text-xl font-semibold uppercase text-white'>
                        {title}
                    </h3>
                    {/* Imagen */}
                    <img
                        src={img}
                        width='400'
                        height='400'
                        className='rounded-md object-cover'
                        alt='title'
                    />
                    {/* Etiquetas */}
                    <ul className='flex items-center gap-3'>
                        {labels.map((label, index) => (
                            <li
                                key={index}
                                className='rounded-md bg-primary-700 px-2 py-1 text-center text-sm font-extrabold text-[#650e59]'
                            >
                                {label}
                            </li>
                        ))}
                    </ul>
                    {/* Descripcion */}
                    <p
                        className='text-sm'
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                    {/* Links */}
                    <div className='flex w-full justify-end gap-5'>
                        {repoHub && (
                            <button
                                target={'_blank'}
                                onClick={() => window.location.href = repoHub}
                                className='transition-all duration-1000 ease-out [&>svg]:hover:fill-white [&>svg]:fill-[#9aa2ad]'
                            >
                                <GitHubIcon width='25' height='25' />
                                {/* </Link> */}
                            </button>
                        )}
                        {repoLab && (
                            <button
                                onClick={() => window.location.href = repoLab}
                                target={'_blank'}
                                className='transition-all duration-1000 ease-out [&>svg]:hover:fill-white [&>svg]:fill-[#9aa2ad]'
                            >
                                <GitLabIcon width='25' height='25' />
                            </button>
                        )}
                        {url && (
                            <button
                                onClick={() => window.location.href = url}
                                target={'_blank'}
                                className='stroke-[#9aa2ad] transition-all duration-100 ease-out [&>svg]:hover:stroke-white  '
                            >
                                <WebIcon width='25' height='25' />
                            </button>
                        )}
                    </div>
                </article>
            </Glow>
        </>
    )
}