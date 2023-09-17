/**
      Options Summary
      Here is a short summary of the options available in rsync. Please refer to the detailed description below for a complete description.

      -v, --verbose               increase verbosity
      -q, --quiet                 suppress non-error messages
          --no-motd               suppress daemon-mode MOTD (see caveat)
      -c, --checksum              skip based on checksum, not mod-time & size
      -a, --archive               archive mode; equals -rlptgoD (no -H,-A,-X)
          --no-OPTION             turn off an implied OPTION (e.g. --no-D)
      -r, --recursive             recurse into directories
      -R, --relative              use relative path names
          --no-implied-dirs       don't send implied dirs with --relative
      -b, --backup                make backups (see --suffix & --backup-dir)
          --backup-dir=DIR        make backups into hierarchy based in DIR
          --suffix=SUFFIX         backup suffix (default ~ w/o --backup-dir)
      -u, --update                skip files that are newer on the receiver
          --inplace               update destination files in-place
          --append                append data onto shorter files
          --append-verify         --append w/old data in file checksum
      -d, --dirs                  transfer directories without recursing
      -l, --links                 copy symlinks as symlinks
      -L, --copy-links            transform symlink into referent file/dir
          --copy-unsafe-links     only "unsafe" symlinks are transformed
          --safe-links            ignore symlinks that point outside the tree
      -k, --copy-dirlinks         transform symlink to dir into referent dir
      -K, --keep-dirlinks         treat symlinked dir on receiver as dir
      -H, --hard-links            preserve hard links
      -p, --perms                 preserve permissions
      -E, --executability         preserve executability
          --chmod=CHMOD           affect file and/or directory permissions
      -A, --acls                  preserve ACLs (implies -p)
      -X, --xattrs                preserve extended attributes
      -o, --owner                 preserve owner (super-user only)
      -g, --group                 preserve group
          --devices               preserve device files (super-user only)
          --specials              preserve special files
      -D                          same as --devices --specials
      -t, --times                 preserve modification times
      -O, --omit-dir-times        omit directories from --times
          --super                 receiver attempts super-user activities
          --fake-super            store/recover privileged attrs using xattrs
      -S, --sparse                handle sparse files efficiently
      -n, --dry-run               perform a trial run with no changes made
      -W, --whole-file            copy files whole (w/o delta-xfer algorithm)
      -x, --one-file-system       don't cross filesystem boundaries
      -B, --block-size=SIZE       force a fixed checksum block-size
      -e, --rsh=COMMAND           specify the remote shell to use
          --rsync-path=PROGRAM    specify the rsync to run on remote machine
          --existing              skip creating new files on receiver
          --ignore-existing       skip updating files that exist on receiver
          --remove-source-files   sender removes synchronized files (non-dir)
          --del                   an alias for --delete-during
          --delete                delete extraneous files from dest dirs
          --delete-before         receiver deletes before transfer (default)
          --delete-during         receiver deletes during xfer, not before
          --delete-delay          find deletions during, delete after
          --delete-after          receiver deletes after transfer, not before
          --delete-excluded       also delete excluded files from dest dirs
          --ignore-errors         delete even if there are I/O errors
          --force                 force deletion of dirs even if not empty
          --max-delete=NUM        don't delete more than NUM files
          --max-size=SIZE         don't transfer any file larger than SIZE
          --min-size=SIZE         don't transfer any file smaller than SIZE
          --partial               keep partially transferred files
          --partial-dir=DIR       put a partially transferred file into DIR
          --delay-updates         put all updated files into place at end
      -m, --prune-empty-dirs      prune empty directory chains from file-list
          --numeric-ids           don't map uid/gid values by user/group name
          --timeout=SECONDS       set I/O timeout in seconds
          --contimeout=SECONDS    set daemon connection timeout in seconds
      -I, --ignore-times          don't skip files that match size and time
          --size-only             skip files that match in size
          --modify-window=NUM     compare mod-times with reduced accuracy
      -T, --temp-dir=DIR          create temporary files in directory DIR
      -y, --fuzzy                 find similar file for basis if no dest file
          --compare-dest=DIR      also compare received files relative to DIR
          --copy-dest=DIR         ... and include copies of unchanged files
          --link-dest=DIR         hardlink to files in DIR when unchanged
      -z, --compress              compress file data during the transfer
          --compress-level=NUM    explicitly set compression level
          --skip-compress=LIST    skip compressing files with suffix in LIST
      -C, --cvs-exclude           auto-ignore files in the same way CVS does
      -f, --filter=RULE           add a file-filtering RULE
      -F                          same as --filter='dir-merge /.rsync-filter'
                                  repeated: --filter='- .rsync-filter'
          --exclude=PATTERN       exclude files matching PATTERN
          --exclude-from=FILE     read exclude patterns from FILE
          --include=PATTERN       don't exclude files matching PATTERN
          --include-from=FILE     read include patterns from FILE
          --files-from=FILE       read list of source-file names from FILE
      -0, --from0                 all *from/filter files are delimited by 0s
      -s, --protect-args          no space-splitting; wildcard chars only
          --address=ADDRESS       bind address for outgoing socket to daemon
          --port=PORT             specify double-colon alternate port number
          --sockopts=OPTIONS      specify custom TCP options
          --blocking-io           use blocking I/O for the remote shell
          --stats                 give some file-transfer stats
      -8, --8-bit-output          leave high-bit chars unescaped in output
      -h, --human-readable        output numbers in a human-readable format
          --progress              show progress during transfer
      -P                          same as --partial --progress
      -i, --itemize-changes       output a change-summary for all updates
          --out-format=FORMAT     output updates using the specified FORMAT
          --log-file=FILE         log what we're doing to the specified FILE
          --log-file-format=FMT   log updates using the specified FMT
          --password-file=FILE    read daemon-access password from FILE
          --list-only             list the files instead of copying them
          --bwlimit=KBPS          limit I/O bandwidth; KBytes per second
          --write-batch=FILE      write a batched update to FILE
          --only-write-batch=FILE like --write-batch but w/o updating dest
          --read-batch=FILE       read a batched update from FILE
          --protocol=NUM          force an older protocol version to be used
          --iconv=CONVERT_SPEC    request charset conversion of filenames
          --checksum-seed=NUM     set block/file checksum seed (advanced)
      -4, --ipv4                  prefer IPv4
      -6, --ipv6                  prefer IPv6
          --version               print version number
      (-h) --help                  show this help (see below for -h comment)
      Rsync can also be run as a daemon, in which case the following options are accepted:
          --daemon                run as an rsync daemon
          --address=ADDRESS       bind to the specified address
          --bwlimit=KBPS          limit I/O bandwidth; KBytes per second
          --config=FILE           specify alternate rsyncd.conf file
          --no-detach             do not detach from the parent
          --port=PORT             listen on alternate port number
          --log-file=FILE         override the "log file" setting
          --log-file-format=FMT   override the "log format" setting
          --sockopts=OPTIONS      specify custom TCP options
      -v, --verbose               increase verbosity
      -4, --ipv4                  prefer IPv4
      -6, --ipv6                  prefer IPv6
      -h, --help                  show this help (if used after --daemon)
 */

export interface IProgress {
  percentage: number
  transferred: number
  eta: number
  runtime: number
  speed: number
}

export interface IOptions {
  source: string
  destination: string
  options?: IRsyncAPI
  onProgress?: (progress: IProgress) => void
}

export interface IRsyncAPI {
  noMotd?: boolean
  checksum?: boolean
  archive?: boolean
  noOption?: boolean
  recursive?: boolean
  relative?: boolean
  noImpliedDirs?: boolean
  backup?: {
    backupDir: string
    suffix: string
  }
  update?: boolean
  inplace?: boolean
  append?: boolean
  appendVerify?: boolean
  dirs?: boolean
  links?: boolean
  copyLinks?: boolean
  copyUnsafeLinks?: boolean
  safeLinks?: boolean
  copyDirLinks?: boolean
  keepDirLinks?: boolean
  hardLinks?: boolean
  perms?: boolean
  executability?: boolean
  chmod?: string
  acls?: boolean // implies --perms / -p
  xattrs?: boolean
  owner?: boolean // super user only
  group?: boolean
  devices?: boolean // super user only
  specials?: boolean
  times?: boolean
  omitDirTimes?: boolean
  super?: boolean
  fakeSuper?: boolean
  sparse?: boolean
  dryRun?: boolean
  wholeFile?: boolean
  oneFileSystem?: boolean
  blockSize?: number
  rsh?: string
  rsyncPath?: string
  existing?: boolean // skip creating new files on reciever
  ignoreExisting?: boolean // skip updating files that exist on reciever
  removeSourceFiles?: boolean
  delete?: boolean
  deleteBefore?: boolean
  deleteDuring?: boolean // --del is the alias to this
  deleteDelay?: boolean
  deleteAfter?: boolean
  deleteExcluded?: boolean
  ignoreErrors?: boolean
  force?: boolean
  maxDelete?: number
  maxSize?: number
  minSize?: number
  partial?: boolean
  partialDir?: string
  delayUpdates?: boolean
  pruneEmptyDirs?: boolean
  numericIds?: boolean
  timeout?: number
  conTimeout?: number
  ignoreTimes?: boolean
  sizeOnly?: boolean
  modifyWindow?: number
  tempDir?: string
  fuzzy?: boolean
  compareDest?: string
  copyDest?: string
  linkDest?: string
  compress?: boolean
  compressLevel?: number
  skipCompress?: string[]
  cvsExclude?: boolean
  filter?: string
  exclude?: string
  excludeFrom?: string
  include?: string
  includeFrom?: string
  filesFrom?: string
  from0?: boolean
  protectArgs?: boolean
  address?: string
  port?: number
  socketOpts?: string
  blockingIo?: boolean
  logFile?: string
  logFileFormat?: string
  passwordFile?: string
  bwLimit?: number
  writeBatch?: string
  onlyWriteBatch?: string
  readBatch?: string
  protocol?: number
  iconv?: string
  checksumSeed?: number
  ipv4?: boolean
  ipv6?: boolean
}

export const RsyncAPIMap: Record<string, string> = {
  noMotd: '--no-motd',
  checksum: '--checksum',
  archive: '--archive',
  noOption: '--no-OPTION',
  recursive: '--recursive',
  relative: '--relative',
  noImpliedDirs: '--no-implied-dirs',
  backup: '--backup',
  backupDir: '--backup-dir',
  suffix: '--suffix',
  upadte: '--update',
  inplace: '--inplace',
  append: '--append',
  appendVerify: '--appendVerify',
  dirs: '--dirs',
  links: '--links',
  copyLinks: '--copy-links',
  copyUnsafeLinks: '--copyUnsafeLinks',
  safeLinks: '--safe-links',
  copyDirLinks: '--copy-dirlinks',
  keepDirLinks: '--keep-dirlinks',
  hardLinks: '--hard-links',
  perms: '--perms',
  executability: '--executability',
  chmod: '--chmod',
  acls: '--acls',
  xattrs: '--xattrs',
  owner: '--owner',
  group: '--group',
  devices: '--devices',
  specials: '--specials',
  times: '--times',
  omitDirTimes: '--omit-dir-times',
  super: '--super',
  fakeSuper: '--fake-super',
  sparse: '--sparse',
  dryRun: '--dry-run',
  wholeFile: '--whole-file',
  oneFileSystem: '--one-file-system',
  blockSize: '--block-size',
  rsh: '--rsh',
  rsyncPath: '--rsync-path',
  existing: '--existing',
  ignoreExisting: '--ignore-existing',
  removeSourceFiles: '--remove-source-files',
  delete: '--delete',
  deleteBefore: '--delete-before',
  deleteDuring: '--delete-during',
  deleteDelay: '--delete-delay',
  deleteAfter: '--delete-after',
  deleteExcluded: '--delete-excluded',
  ignoreErrors: '--ignore-errors',
  force: '--force',
  maxDelete: '--max-delete',
  maxSize: '--max-size',
  minSize: '--min-size',
  partial: '--partial',
  partialDir: '--partial-dir',
  delayUpdates: '--delay-updates',
  pruneEmptyDirs: '--prune-empty-dirs',
  numericIds: '--numeric-ids',
  timeout: '--timeout',
  conTimeout: '--contimeout',
  ignoreTimes: '--ignore-times',
  sizeOnly: '--size-only',
  modifyWindow: '--modify-window',
  tempDir: '--temp-dir',
  fuzzy: '--fuzzy',
  compareDest: '--compare-dest',
  copyDest: '--copy-dest',
  linkDest: '--link-dest',
  compress: '--compress',
  compressLevel: '--compress-level',
  skipCompress: '--skip-compress',
  cvsExclude: '--cvs-exclude',
  filter: '--filter',
  exclude: '--exclude',
  excludeFrom: '--exclude-from',
  include: '--include',
  includeFrom: '--include-from',
  filesFrom: '--files-from',
  from0: '--from0',
  protectArgs: '--protect-args',
  address: '--address',
  port: '--port',
  socketOpts: '--sockopts',
  blockingIo: '--blocking-io',
  logFile: '--log-file',
  logFileFormat: '--log-file-format',
  passwordFile: '--password-file',
  bwLimit: '--bwlimit',
  writeBatch: '--write-batch',
  onlyWriteBatch: '--only-write-batch',
  readBatch: '--read-batch',
  protocol: '--protocol',
  iconv: '--iconv',
  checksumSeed: '--checksum-seed',
  ipv4: '--ipv4',
  ipv6: '--ipv6'
}
