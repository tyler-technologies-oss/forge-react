import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/app-bar-profile-button";
import { useEventListener, useProperties } from "./react-utils.js";

export const AppBarProfileButtonComponent = forwardRef(
  (props, forwardedRef) => {
    const ref = useRef(null);
    const {
      signOutButton,
      profileButton,
      open,
      avatarImageUrl,
      avatarLetterCount,
      avatarText,
      avatarIcon,
      fullName,
      email,
      signOutButtonText,
      profileButtonText,
      ariaLabel,
      ariaLabelledby,
      popupElement,
      profileCardBuilder,
      ...filteredProps
    } = props;

    /** Event listeners - run once */
    useEventListener(
      ref,
      "forge-profile-card-sign-out",
      props.onForgeProfileCardSignOut
    );
    useEventListener(
      ref,
      "forge-profile-card-profile",
      props.onForgeProfileCardProfile
    );

    /** Properties - run whenever a property has changed */
    useProperties(ref, "popupElement", props.popupElement);
    useProperties(ref, "profileCardBuilder", props.profileCardBuilder);

    useImperativeHandle(forwardedRef, () => ({}));

    return React.createElement(
      "forge-app-bar-profile-button",
      {
        ref,
        ...filteredProps,
        "avatar-image-url": props.avatarImageUrl || props["avatar-image-url"],
        "avatar-letter-count":
          props.avatarLetterCount || props["avatar-letter-count"],
        "avatar-text": props.avatarText || props["avatar-text"],
        "avatar-icon": props.avatarIcon || props["avatar-icon"],
        "full-name": props.fullName || props["full-name"],
        email: props.email,
        "sign-out-button-text":
          props.signOutButtonText || props["sign-out-button-text"],
        "profile-button-text":
          props.profileButtonText || props["profile-button-text"],
        "aria-label": props.ariaLabel || props["aria-label"],
        "aria-labelledby": props.ariaLabelledby || props["aria-labelledby"],
        class: props.className,
        exportparts: props.exportparts,
        for: props.htmlFor,
        part: props.part,
        tabindex: props.tabIndex,
        "sign-out-button": props.signOutButton ? "" : undefined,
        "profile-button": props.profileButton ? "" : undefined,
        open: props.open ? "" : undefined,
        style: { ...props.style },
      },
      props.children
    );
  }
);
