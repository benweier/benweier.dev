import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { clsx } from 'clsx'
import Image from 'next/future/image'
import { useRouter } from 'next/router'

const localeLabels: Record<string, string> = {
  'en-US': 'English (US)',
  'en-GB': 'English (UK)',
  'en-AU': 'English (AU)',
}

export const LocaleSelect = () => {
  const { locale, locales, push, pathname, query, asPath } = useRouter()

  return (
    <>
      {locale && (
        <div className="w-48">
          <Listbox
            value={locale}
            onChange={(locale) => {
              push({ pathname, query }, asPath, { locale })
            }}
          >
            <div className="relative mt-1">
              <Listbox.Button
                className={
                  'relative w-full rounded bg-gray-100/[0.3] py-2 px-4 text-left backdrop-blur focus:outline-none focus-visible:ring focus-visible:ring-sky-600 focus-visible:ring-opacity-75 dark:bg-gray-900/[0.3] dark:focus-visible:ring-sky-400 sm:text-sm'
                }
              >
                <div className="flex items-center justify-start gap-3">
                  <span>
                    <Image src={`/flags/${locale}.png`} width={16} height={16} quality={100} />
                  </span>
                  <span className="block flex-1 truncate">{localeLabels[locale]}</span>
                  <span className="pointer-events-none text-gray-400">
                    <SelectorIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>
              </Listbox.Button>
              <Transition
                as={Fragment}
                enter="transition-opacity ease-in duration-100"
                leave="transition-opacity ease-in duration-100"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                {locales && (
                  <Listbox.Options
                    className={
                      'absolute mt-1 max-h-60 w-full overflow-auto rounded bg-gray-100/[0.3] p-1 text-base ring ring-gray-900 ring-opacity-5 backdrop-blur transition-colors duration-75 ease-in-out focus:outline-none dark:bg-gray-900/[0.3] sm:text-sm'
                    }
                  >
                    {locales.map((locale) => (
                      <Listbox.Option
                        key={locale}
                        className={({ active, selected }) =>
                          clsx('relative select-none rounded py-2 px-3', {
                            'bg-slate-600/[0.2] text-gray-900 dark:bg-slate-200/[0.2] dark:text-gray-100': active,
                            'font-bold text-gray-700 dark:text-gray-200': selected,
                          })
                        }
                        value={locale}
                      >
                        {({ selected }) => (
                          <div className="flex items-center justify-start gap-3">
                            <span>
                              <Image src={`/flags/${locale}.png`} width={16} height={16} quality={100} />
                            </span>
                            <span className="block flex-1 truncate">{localeLabels[locale]}</span>
                            {selected ? (
                              <span className="text-sky-600 dark:text-sky-400">
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </div>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                )}
              </Transition>
            </div>
          </Listbox>
        </div>
      )}
    </>
  )
}
