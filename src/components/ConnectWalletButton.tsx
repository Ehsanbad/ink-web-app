"use client";

import { Button, InkIcon } from "@inkonchain/ink-kit";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";

import { classNames } from "@/util/classes";

const truncateEnsName = (ensName: string, maxLength = 16) => {
  if (!ensName || !ensName.endsWith(".eth")) return ensName;

  const namePart = ensName.slice(0, -4); // Remove .eth
  if (namePart.length <= maxLength) return ensName;
  return `${namePart.slice(0, maxLength)}...eth`;
};

interface ConnectWalletButtonProps {
  className?: string;
  connectLabel?: string;
  shrinkOnMobile?: boolean;
  noIcon?: boolean;
  size?: "md" | "lg";
}

export const ConnectWalletButton: React.FC<ConnectWalletButtonProps> = ({
  className,
  connectLabel = "Connect",
  shrinkOnMobile = false,
  size = "md",
  noIcon = false,
}) => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        const ready = mounted;
        const connected = ready && account && chain;

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {!connected ? (
              <Button
                onClick={openConnectModal}
                type="button"
                className={classNames(className)}
                size={size}
                variant="transparent"
              >
                {!noIcon && (
                  <div className={shrinkOnMobile ? "sm:hidden" : ""}>
                    <InkIcon.Wallet className="size-6" enforce="inherit" />
                  </div>
                )}
                <div className={shrinkOnMobile ? "hidden sm:block" : ""}>
                  {connectLabel}
                </div>
              </Button>
            ) : (
              <>
                <Button
                  onClick={
                    chain.unsupported ? openChainModal : openAccountModal
                  }
                  className={classNames(
                    chain.unsupported &&
                      "ink:text-status-error ink:bg-status-error-bg",
                    shrinkOnMobile ? "sm:hidden" : "hidden",
                    className
                  )}
                  size={size}
                  variant="transparent"
                  rounded="full"
                >
                  <InkIcon.Profile className="size-6" enforce="inherit" />
                </Button>
                <Button
                  onClick={
                    chain.unsupported ? openChainModal : openAccountModal
                  }
                  className={classNames(
                    chain.unsupported &&
                      "ink:text-status-error ink:bg-status-error-bg",
                    shrinkOnMobile ? "hidden sm:block" : "",
                    className
                  )}
                  size={size}
                  variant="transparent"
                >
                  <div className="ink:-my-1 whitespace-nowrap">
                    {account.ensAvatar && account.ensName ? (
                      <div className="flex items-center gap-2">
                        <Image
                          src={account.ensAvatar}
                          alt={account.ensName}
                          className="w-6 h-6 rounded-full"
                          height={39}
                          width={39}
                        />
                        {truncateEnsName(account.ensName)}
                      </div>
                    ) : (
                      account.displayName
                    )}
                  </div>
                </Button>
              </>
            )}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
