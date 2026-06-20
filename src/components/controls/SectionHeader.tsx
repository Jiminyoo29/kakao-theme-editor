interface Props {
  title: string
}

export default function SectionHeader({ title }: Props) {
  return (
    <div className="flex items-center gap-2 mt-5 mb-2 first:mt-0">
      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
        {title}
      </span>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  )
}
