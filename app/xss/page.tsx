'use client'

import { useSearchParams } from 'next/navigation'
import React from 'react'
import Form from './Form'

export default function XSS() {
	const searchParams = useSearchParams()

	return (
		<div>
			<div className='my-12 mx-2 lg:mx-0'>
				<h1 className='text-xl font-semibold'>Reflected XSS</h1>
				<Form />
				<div>
					You search for:{' '}
					<span
						dangerouslySetInnerHTML={{
							__html:
								searchParams.get('search') ||
								"<span class='text-red-500'>test</span>",
						}}
					/>
				</div>
			</div>
		</div>
	)
}
