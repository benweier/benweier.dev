import { Fragment, useEffect, useMemo } from 'react'
import { flip, offset, shift, useFloating, autoUpdate } from '@floating-ui/react-dom'
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
  const { x, y, reference, floating, strategy, refs, update } = useFloating({
    strategy: 'absolute',
    placement: 'bottom',
    middleware: [offset(5), flip(), shift({ padding: 10 })],
  })

  const xy = useMemo(() => [x, y], [x, y])

  useEffect(() => {
    if (!refs.reference.current || !refs.floating.current) {
      return
    }

    return autoUpdate(refs.reference.current, refs.floating.current, update)
  }, [refs.reference, refs.floating, update, xy])

  return (
    <>
      {locale && (
        <div className="w-64">
          <Listbox
            value={locale}
            onChange={(locale) => {
              document.cookie = `NEXT_LOCALE=${locale}`
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
                      <Image src={`/flags/${locale}.png`} width={16} height={16} quality={100} />
                    </span>
                    <span className="block flex-1 truncate">{localeLabels[locale]}</span>
                    <span className="pointer-events-none text-gray-400">
                      <SelectorIcon className="h-5 w-5" aria-hidden="true" />
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
                        ? `translate(${Math.round(x)}px,${Math.round(y)}px)`
                        : undefined,
                  }}
                >
                  <Transition
                    show={open}
                    enter="transition-opacity ease-in duration-100"
                    leave="transition-opacity ease-in duration-100"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    {locales && (
                      <Listbox.Options
                        static
                        className={
                          'max-h-60 w-64 overflow-auto rounded bg-gray-100/[0.3] p-1 text-base ring ring-gray-900 ring-opacity-5 backdrop-blur transition-colors duration-75 ease-in-out focus:outline-none dark:bg-gray-900/[0.3] sm:text-sm'
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
              </div>
            )}
          </Listbox>
        </div>
      )}
    </>
  )
}
