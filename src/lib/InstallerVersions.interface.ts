export interface InstallerVersion {
    version: string
    url: string
}

export interface InstallerVersions {
    success: boolean
    latest: InstallerVersion
    versions: InstallerVersion[]
}
