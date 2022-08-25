import { useState } from 'react'
import { autoPlacement, autoUpdate, offset, shift, useFloating } from '@floating-ui/react-dom-interactions'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
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
  const [value, setValue] = useState(locale)
  const { x, y, reference, floating, strategy } = useFloating({
    strategy: 'absolute',
    placement: 'bottom',
    middleware: [
      offset(10),
      autoPlacement({
        padding: 10,
        allowedPlacements: ['top', 'bottom'],
      }),
      shift({ padding: 10 }),
    ],
    whileElementsMounted: autoUpdate,
  })

  return (
    <>
      {value && (
        <div className="w-64">
          <Listbox
            value={value}
            onChange={(locale) => {
              document.cookie = `NEXT_LOCALE=${locale}; samesite=lax; secure; max-age=${60 * 60 * 24 * 30};`
              setValue(locale)
              push({ pathname, query }, asPath, { locale })
            }}
          >
            {({ open }) => (
              <div className="relative">
                <Listbox.Button
                  ref={reference}
                  className={
                    'relative w-full rounded bg-gray-100/[0.3] py-2 px-4 text-left backdrop-blur focus:outline-none focus-visible:ring focus-visible:ring-sky-600 focus-visible:ring-opacity-75 dark:bg-gray-900/[0.3] dark:focus-visible:ring-sky-400 sm:text-sm'
                  }
                >
                  <div className="flex items-center justify-start gap-3">
                    <span>
                      <Image src={`/flags/${value}.png`} alt={value} width={16} height={16} quality={100} />
                    </span>
                    <span className="block flex-1 truncate">{localeLabels[value]}</span>
                    <span className="pointer-events-none inline-flex h-4 w-4 items-center justify-center text-gray-400">
                      <ChevronUpDownIcon
                        className={clsx('h-4 w-4 transition-all duration-75 ease-in-out', { ['rotate-90']: open })}
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </Listbox.Button>
                <div
                  ref={floating}
                  style={{
                    position: strategy,
                    top: 0,
                    transform:
                      typeof x === 'number' && typeof y === 'number'
                        ? `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`
                        : undefined,
                  }}
                >
                  <Transition
                    show={open}
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    className="transition-opacity duration-75 ease-in"
                  >
                    {locales && (
                      <Listbox.Options
                        static
                        className={
                          'max-h-60 w-64 overflow-auto rounded bg-gray-200/[0.9] p-1 text-base ring ring-gray-900 ring-opacity-5 backdrop-blur transition-colors duration-75 ease-in-out focus:outline-none dark:bg-gray-800/[0.9] sm:text-sm'
                        }
                      >
                        {locales.map((locale) => (
                          <Listbox.Option
                            key={locale}
                            className={({ active, selected }) =>
                              clsx('relative select-none rounded py-2 px-3', {
                                'bg-slate-600/[0.2] text-gray-900 dark:bg-slate-200/[0.2] dark:text-gray-100': active,
                                'text-gray-700 dark:text-gray-200': selected,
                              })
                            }
                            value={locale}
                          >
                            {({ selected }) => (
                              <div className="flex items-center justify-start gap-3">
                                <span>
                                  <Image
                                    src={`/flags/${locale}.png`}
                                    alt={locale}
                                    width={16}
                                    height={16}
                                    quality={100}
                                  />
                                </span>
                                <span className="block flex-1 truncate">{localeLabels[locale]}</span>
                                {selected && (
                                  <span className="h-4 w-4 text-sky-600 dark:text-sky-400">
                                    <CheckIcon className="h-4 w-4" aria-hidden="true" />
                                  </span>
                                )}
                              </div>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    )}
                  </Transition>
                </div>
              </div>
            )}
          </Listbox>
        </div>
      )}
    </>
  )
}
