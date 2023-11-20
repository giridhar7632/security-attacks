// import { addData } from '@/lib/seed'

import Link from 'next/link'

export default function Home() {
	// addData()
	return (
		<main>
			<div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
				<p className='fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
					Security attacks demo
				</p>
			</div>

			<div className='relative w-full max-w-2xl my-12'>
				<h1 className='relative font-semibold dark:drop-shadow-[0_0_0.3rem_#ffffff70] text-2xl mb-8'>
					Web Application Security: Defending Against SQL Injection, XSRF, and
					XSS Attacks
				</h1>
				<p className='mb-4 text-gray-700 tracking-tight'>
					This is the simple{' '}
					<Link href='https://nextjs.org' target='_blank'>
						Next.js
					</Link>{' '}
					app created to demostrate the web application security covering common
					cyber attacks.
				</p>
				<div className='mb-4'>
					<p className=''>✨ Link to source code:</p>
					<p className=''>📝 Link to article:</p>
				</div>
				<div>
					<p className='font-semibold'>List of attacks covered:</p>
					<ol className='my-4'>
						<li>
							<Link href={'/xss'}>1. Cross-site scripting (XSS)</Link>
						</li>
						<li>
							<Link href={'/xsrf'}>2. Cross-site request forgery (XSRF)</Link>
						</li>
						<li>
							<Link href={'/sql-injection'}>3. SQL injection</Link>
						</li>
					</ol>
				</div>
			</div>

			<div className='mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left'></div>
		</main>
	)
}
