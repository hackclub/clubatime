{ pkgs, lib, config, inputs, ... }:

{
  # https://devenv.sh/packages/
  packages = [ pkgs.git ];

  # https://devenv.sh/languages/
  languages.javascript = {
    enable = true;
    package = pkgs.nodejs_24;
    corepack.enable = true;
    pnpm.install.enable = true;
  };

  languages.typescript.enable = true;

  languages.nix.enable = true;
  # See full reference at https://devenv.sh/reference/options/
}
