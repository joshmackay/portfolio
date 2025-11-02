
type Props = {
  className?: string;
}

export default function IconLogo({ className }: Props)
{
  return (
    <svg className={className} viewBox="0 0 96 104" xmlns="http://www.w3.org/2000/svg">
      <path d="M46.75 3.6084C47.5235 3.16183 48.4765 3.16183 49.25 3.6084L85.8193 24.7217C86.5928 25.1683 87.0693 25.9936 87.0693 26.8867V69.1133C87.0693 70.0064 86.5928 70.8317 85.8193 71.2783L49.25 92.3916C48.4765 92.8382 47.5235 92.8382 46.75 92.3916L10.1807 71.2783C9.40722 70.8317 8.93068 70.0064 8.93066 69.1133V26.8867C8.93067 25.9936 9.40722 25.1683 10.1807 24.7217L46.75 3.6084Z" stroke="currentColor" strokeWidth="5" shapeRendering="crispEdges" />
      <defs>
      </defs>
    </svg>



  )

}

