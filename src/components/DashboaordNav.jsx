'use client'

import { Icons } from './Icons'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Sidebar } from './Sidebar'

export function DashboardNav() {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                {/* <Icons.Menu className="h-5 w-5" /> */}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 px-0">
              <Sidebar />
            </SheetContent>
          </Sheet>
        </div>
        <div className="flex-1 flex justify-end">
          {/* User dropdown would go here */}
        </div>
      </div>
    </header>
  )
}